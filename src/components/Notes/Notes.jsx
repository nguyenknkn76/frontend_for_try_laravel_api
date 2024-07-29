import { useDispatch, useSelector } from "react-redux"
import { initialNotes, setNotes, updateNoteImp } from "../../reducers/NoteReducer"
import { useEffect } from "react"
import { Link, useMatch } from "react-router-dom"
import NoteService from "../../services/NoteService"
import { setMsg } from "../../reducers/MessageReducer"

const Notes = ({notes}) => {
    console.log(notes)
    const dispatch = useDispatch()
    // const notes = useSelector(state => state.notes)
    // const match = useMatch('/notes/:id')
    // const note = match
    //     ? notes.find(note => note.id === Number(match.params.id))
    //     : null

    useEffect(()=>{
        dispatch(initialNotes())
    },[])

    const toggleImportant = (note) => {       
        console.log('try change imp') 
        dispatch(updateNoteImp(note))
    }

    const deleteNote = async (note) => {
        console.log('try del')
        const newNotes = notes.filter(n => n.id !== note.id)
        console.log(newNotes)
        await NoteService
            .remove(note)
            .then(res => console.log(res))
        dispatch(setMsg(`delete success note ${note.id}`))
        dispatch(setNotes(newNotes))
        
    }
    return(
        <div>
            this is Notes
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>content</th>
                        <th>important</th>
                        <th>view</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {notes?.map(note => 
                        <tr key={note.id} >
                            <td>{note.id}</td>
                            <td>{note.content}  </td>
                            <td><button onClick={() => toggleImportant(note)}>{note.important ? <strong>important</strong> : 'non'}</button></td>    
                            <td>
                                <Link to={`/notes/${note.id}`}>view</Link>
                            </td>                    
                            <td><button onClick={() => deleteNote(note)}>delete</button></td>            
                        </tr>
                    )}
                </tbody>   
            </table>
        </div>
    )
}
export default Notes