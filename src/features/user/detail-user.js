import { createSlice } from "@reduxjs/toolkit";

export const detailUser = createSlice({
    name: 'detail-user',
    initialState: { 
                    batchId: '',
                    batchName: '',
                    learningTrackId: '',
                    learningTrackName: '',
                    point: '',
                    peringkat: '',
                    userWithBadgesProgress: []
                    
    },
    reducers:{
        setDetailUser: (state,action)=>{
            const {batchId, batchName, learningTrackId, learningTrackName} = action.payload;
            state.batchId = batchId
            state.batchName = batchName
            state.learningTrackId = learningTrackId
            state.learningTrackName = learningTrackName
            localStorage.setItem('batch_id', batchId)
            localStorage.setItem('learning_track_id', learningTrackId)
        },
        setUserWithBadgesProgress: (state,action)=>{
            const data = [...action.payload]
            state.userWithBadgesProgress = [...data]
        }
    }
})

export const {setDetailUser, setUserWithBadgesProgress } = detailUser.actions

export default detailUser.reducer;