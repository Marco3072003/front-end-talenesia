import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/api-slice'
import detailReducer from '../features/user/detail-user'
import  authReducer  from '../features/auth/auth-slice'
import modalReducer from '../features/modal/modal-slice'
import  detailClassReducer  from '../features/user/participants-class'
import  meetingReducer  from '../features/mentor/meeting'

export default configureStore({
  reducer: {
      auth: authReducer,
      modal: modalReducer,
      detailUser: detailReducer,
      detailParticipants: detailClassReducer,
      meeting: meetingReducer,
      [apiSlice.reducerPath]: apiSlice.reducer
  }, 
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(apiSlice.middleware)
    
  }
})