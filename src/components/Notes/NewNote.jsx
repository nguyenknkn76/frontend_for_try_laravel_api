import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import NoteService from "../../services/NoteService"
import { appendNote } from "../../reducers/NoteReducer"

const NewNote = () => {
    // const userId = useSelector(state => state.loggedin.id)
    const dispatch = useDispatch()
    const loggedin = useSelector(state => state.loggedin)
    const [content, setContent] = useState('')
    const handleCreateNote =  async(event) => {
        event.preventDefault()
        console.log('try create note')
        const newNote = {
            user_id: loggedin.id,
            content,
            important: false
        }
        await NoteService
            .create(newNote, loggedin.token)
            .then(res => dispatch(appendNote(res)))
        
    }
    return(
        <div>
            this is new note
            <form onSubmit={handleCreateNote}>
                <div>
                    content: <input type="text" placeholder="enter content here" value={content} onChange={(e) => setContent(e.target.value)}/>
                    <button type="submit">create</button>
                </div>
            </form>
        </div>
    )
}

export default NewNote