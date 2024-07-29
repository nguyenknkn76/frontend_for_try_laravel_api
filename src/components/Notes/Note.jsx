import React, { useEffect, useState } from "react";
import ReadNote from "./ReadNote";
import EditNote from "./EditNote";


const Note = ({ note }) => {
    const [editable, setEditable] = useState(false);
    
    return (
        <div>
            <h2>This is Note {note?.id}</h2>
            {
                !editable 
                    ? <ReadNote note={note} setEditable={()=> setEditable(true)}/> 
                    : <EditNote note={note} setEditable={()=> setEditable(false)}/>
            }

        </div>
    );
};
export default Note;
