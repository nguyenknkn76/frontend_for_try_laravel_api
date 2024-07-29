import { useEffect, useRef } from "react";
import NoteService from "../services/NoteService";
import { useDispatch, useSelector } from "react-redux";
import { initialNotes, setNotes, updateNote, updateNoteImp } from "../reducers/NoteReducer";
import NewNote from "../components/Notes/NewNote";
import Notes from "../components/Notes/Notes";
import Togglabel from "../components/Togglabel/Togglabel";

const NotePage = ({notes}) => {
    // const noteFormRef =useRef()
    return(
        <div>
            {/* <Togglabel buttonLabel = 'create-note-func' ref={noteFormRef}>
                <NewNote/> <strong>~must be loggedin</strong>
            </Togglabel>     */}
            <NewNote/>
            <Notes notes={notes}/>
        </div>
    )
}

export default NotePage