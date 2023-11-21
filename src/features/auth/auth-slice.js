import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { setLogoutModal } from '../modal/modal-slice'

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        username: '',
        token: '',
        
        role : '',
        TOKEN_KEY : 'my-key-to_entry',
        USER_KEY : 'my-user-when-entry',
        ROLE_KEY: 'my-role-key'
    },
    reducers: {
        setCredentials: (state, action)=>{
            const { username, token, role } = action.payload
            state.username = username
            state.token = token
            state.role = role
            localStorage.setItem(state.TOKEN_KEY, token)
            localStorage.setItem(state.USER_KEY, username)
            localStorage.setItem(state.ROLE_KEY, role)
            state.isLogin = true
        },
        logout: (state) => {
            const TOKEN_KEY = 'my-key-to_entry'
            const USER_KEY = 'my-user-when-entry'
            localStorage.removeItem(TOKEN_KEY)
            localStorage.removeItem(USER_KEY)
            localStorage.removeItem('batch_id')
            localStorage.removeItem('learning_track_id')
            localStorage.removeItem('my-role-key')
            state.username = ''
            state.token = ''
            state.isLogin = false;
            // useDispatch(setLogoutModal())
            window.location.href = '/login'
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
        }, 
        checkLogin : (state) =>{
            
            if(!state.isLogin){
              
            } 
        }
    },
})

export default authSlice.reducer;
export const { setCredentials , logout, setCredentialsFromLocal, checkLogin } = authSlice.actions
