import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setCredentials, logout } from '../../features/auth/auth-slice';


const baseQuery = fetchBaseQuery({
    // baseUrl: 'https://fair-tan-woodpecker-boot.cyclic.app', 
    baseUrl: 'https://lively-pear-reindeer.cyclic.app', 
    prepareHeaders: (headers, { getState }) =>{
        const token = getState().auth.token;
        if(token){
            headers.set('Authorization', `Bearer ${token}`);
            
        }

        return headers;
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    const user = api.getState().auth.username
    
    if(user === '' && result?.data){
        
        const token = result.data.data.token.split(' ');
       
        api.dispatch(setCredentials({ username:result.data.data.user.userFullName, token: token[1], role: result.data.data.user.userRole }))
    }
    
    return result;

}



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['participant'],
    endpoints : () => ({})


})



