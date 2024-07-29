import { createSlice } from "@reduxjs/toolkit";
import NoteService from "../services/NoteService";

const noteSlice = createSlice({
    name:"notes",
    initialState: [],
    reducers:{
        setNotes(state, action){
            return action.payload
        },
        updateNote(state, action){
            const changedNote = action.payload
            return state.map(note => 
                note.id !== changedNote.id ? note : changedNote
            )
        },
        appendNote(state, action){
            return state.concat(action.payload)
        }
    }
})
export const {setNotes, updateNote, appendNote} = noteSlice.actions

export const initialNotes = () => {
    return async dispatch => {
        const notes = await NoteService.getAll()
        dispatch(setNotes(notes))
    } 
}

export const updateNoteImp = (note) => {
    return async dispatch => {
        const updatedNote = await NoteService.update(note)
        dispatch(updateNote(updatedNote))
    }
}

export default noteSlice.reducer