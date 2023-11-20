import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/api-slice'
import  authReducer  from '../features/auth/auth-slice'

export default configureStore({
  reducer: {
      auth: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer
  }, 
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(apiSlice.middleware)
    
  }
})