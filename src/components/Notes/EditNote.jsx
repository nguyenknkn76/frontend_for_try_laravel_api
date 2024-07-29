import React, { useEffect, useState } from "react";
import NoteService from "../../services/NoteService";
import { useDispatch } from "react-redux";
import { updateNote } from "../../reducers/NoteReducer";



const EditNote = ({note, setEditable}) => {
    const [newContent, setNewContent] = useState(note?.content)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("New content:", newContent);
    }, [newContent]);

    const saveNote = async (e) => {
        e.preventDefault()
        console.log('try save note')
        const newNote = {
            ...note,
            content: newContent
        }
        await NoteService
            .udpateContent(newNote)
            .then(returnedNote => {
                dispatch(updateNote(returnedNote))
            })
    }
    return(
        <form onClick={saveNote}>
            <div>
                <strong>User id: </strong>
                <input value={note?.user_id} readOnly />
            </div>
            <div>
                <strong>Content: </strong>
                <input
                    type="text"
                    value={newContent}
                    onChange={(e)=> setNewContent(e.target.value) }
                /> ~ !!! edit here
            </div>
            <div>
                <strong>Important: </strong>
                <input value={note?.important ? 'important' : 'non-important'} readOnly />
            </div>
            <button type="submit" onClick={setEditable}>save</button>   
            <button onClick={setEditable}>back</button>
        </form>
    )
}

export default EditNote