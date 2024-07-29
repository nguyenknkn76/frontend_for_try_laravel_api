import { createSlice } from "@reduxjs/toolkit";

const choosedEmailSlice = createSlice({
    name:'choosedEmail',
    initialState: null,
    reducers:{
        setChoosedEmail(state, action){
            return action.payload
        }
    }
})

export const {setChoosedEmail} = choosedEmailSlice.actions

export default choosedEmailSlice.reducer