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
    baseUrl: 'https://fair-tan-woodpecker-boot.cyclic.app', 
    prepareHeaders: (headers, { getState }) =>{
        const token = getState().auth.token;
        if(token){
            headers.set('Authorization', `Bearer ${token}`);
            
        }
        /* headers.set('Content-Type', 'application/json'),
        headers.set('Origin', 'http://localhost:5173/login') */
        return headers;
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    const user = api.getState().auth.username
    
    if(user === '' && result?.data){
        
        const token = result.data.data.token.split(' ');
        /* console.log(result.data.data.user)
        console.log(token[1]) */

        //store token to credentialstate
       
        api.dispatch(setCredentials({ username:result.data.data.user.userFullName, token: token[1], role: result.data.data.user.userRole }))
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



