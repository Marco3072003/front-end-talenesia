import { createSlice } from "@reduxjs/toolkit";



export const modalSlice = createSlice({

        name: 'modal',
        initialState: {
                        logoutModal: false,
                        publicSidebar : true,
                        privateSidebar : true
                    },
        reducers: {
            setLogoutModal: (state)=>{
                return {...state, logoutModal: !state.logoutModal}
            },
            setPublicSidebar: (state) =>{
                return {...state, publicSidebar: !state.publicSidebar}
            }, setPrivateSidebar: (state) =>{
                return {...state, privateSidebar: !state.privateSidebar}
                
            }
        }
})

export default modalSlice.reducer;

export const { setLogoutModal, setPublicSidebar, setPrivateSidebar } = modalSlice.actions

