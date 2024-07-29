import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'this is msg',
    reducers: {
        setMsg(state, action){
            return action.payload
        },
    }
})

export const {setMsg} = messageSlice.actions

export default messageSlice.reducer