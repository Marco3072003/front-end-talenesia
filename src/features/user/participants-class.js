import { createSlice } from "@reduxjs/toolkit";

export const detailClass = createSlice({
                            name: 'detail-class',
                            initialState: {
                                participants: [
                                               /*  {
                                                    userId: '',
                                                    userFullname: ''
                                                } */
                                ],
                                mentors: [
                                                /* {
                                                    userId: '',
                                                    userFullName: ''
                                                } */
                                ]
                            },
                            reducers: {
                                setParticipants: (state, action)=>{
                                    const { participants, mentors } = action.payload
                                    state.participants= [...participants]
                                    state.mentors = [...mentors]
                                }
                            }
                            
})

export const { setParticipants } = detailClass.actions
export default detailClass.reducer;