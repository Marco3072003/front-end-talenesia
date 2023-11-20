import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
    name:'auth',
    initialState: {
        username: '',
        token: '',
        isLogin: false,
        TOKEN_KEY : 'my-key-to_entry',
        USER_KEY : 'my-user-when-entry'
    },
    reducers: {
        setCredentials: (state, action)=>{
            const {username, token} = action.payload
            state.username = username
            state.token = token
            localStorage.setItem(state.TOKEN_KEY, token)
            localStorage.setItem(state.USER_KEY, username)
            state.isLogin = true
        },
        logout: (state) => {
            const TOKEN_KEY = 'my-key-to_entry'
            const USER_KEY = 'my-user-when-entry'
            localStorage.removeItem(TOKEN_KEY)
            localStorage.removeItem(USER_KEY)
            state.username = ''
            state.token = ''
            state.isLogin = false;
        },
        setCredentialsFromLocal: (state) =>{
            const TOKEN_KEY = state.TOKEN_KEY
            const USER_KEY = state.USER_KEY
            const token = localStorage.getItem(TOKEN_KEY)
            const username = localStorage.getItem(USER_KEY)
            if(token !== null){
                state.username = username
                state.token = token 
                state.isLogin = true
            }
        }
    },
})

export default authSlice.reducer;
export const { setCredentials , logout, setCredentialsFromLocal } = authSlice.actions
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token