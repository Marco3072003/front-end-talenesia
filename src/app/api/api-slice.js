import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setCredentials, logout } from '../../features/auth/auth-slice';

/* export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://back-end-final-project-gg30.vercel.app/login',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) =>{
            const token = getState().auth.token

            token && headers.set('Authorization', `Bearer ${token}`),
            headers.set('Content-Type', 'application/json')
            
            return headers
        }
    }),
    endpoints(builder){
        return{
            fetchLogin: builder.query({
                query: (body) => ({
                    url:'/login',
                    method: 'POST',
                    body: body
                })
            })
        }
    }


}) */

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://back-end-final-project-gg30.vercel.app/', 
    prepareHeaders: (headers, { getState }) =>{
        const token = getState().auth.token
        if(token) {
         headers.set('Authorization', `Bearer ${token}`)
        }
        // headers.set('Content-Type', 'application/json')
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    const user = api.getState().auth.username
    
    if(user === '' && result?.data){
        //store token to credentialstate
        api.dispatch(setCredentials({username:result.data.username, token: result.data.accessToken}))
    }
    
    return result;

}

/* const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if(result?.error?.originalStatus === 400){
        console.log('sending refresh token')
        //send refresh token to get new access token
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)

        if(refreshResult?.data){
            const user = api.getState().auth.user
            //store new token
            api.dispatch(setCredentials({...refreshResult.data, user}))
            //retry the original query with new acdess token
            result = await baseQuery(args, api, extraOptions)
        }else{
            api.dispatch(logout())
        }
    }

    return result;

} */

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints : () => ({})


})



