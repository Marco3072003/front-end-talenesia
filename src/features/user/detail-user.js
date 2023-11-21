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
        }
    }
})

export const {setDetailUser} = detailUser.actions

export default detailUser.reducer;