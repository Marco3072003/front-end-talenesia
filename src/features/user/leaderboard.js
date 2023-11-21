import { createSlice } from "@reduxjs/toolkit";

export const leaderboard = createSlice({
                name: 'leaderboard',
                initialState:{
                    participants: [
                                    {
                                        username: '',
                                        badgesValue: []
                                    }
                    ]
                }
})