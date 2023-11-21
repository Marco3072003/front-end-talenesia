import { createSlice } from "@reduxjs/toolkit";

export const meetingSlice = createSlice({
                                    name: 'meeting',    
                                    initialState : {
                                                        isSubmit: false,
                                                        isLink: false,
                                                        isOpenUpdate: false,
                                                        link: null
                                    },
                                    reducers: {
                                        addLink: (state, action)=>{
                                            const { link } = action.payload
                                            state.link = link;
                                        },
                                        setIsOpenUpdate: (state,action)=>{
                                            state.isOpenUpdate = !state.isOpenUpdate
                                            state.isLink = !state.isLink
                                        },
                                        setIsSubmit: (state,action)=>{
                                            state.isSubmit = !state.isSubmit
                                            state.isLink = !state.isLink
                                        },
                                        setIsLink : (state, action)=>{
                                            state.isLink = !state.isLink
                                        }


                                    }
})

export const { addLink, setIsOpenUpdate, setIsSubmit } = meetingSlice.actions
export default meetingSlice.reducer