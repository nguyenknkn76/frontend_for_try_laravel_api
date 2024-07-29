import React, { useEffect, useState } from "react";

const ReadNote = ({note, setEditable}) => {
    return(
        <form>
            <div>
                    <strong>User id: </strong>
                    <input value={note?.user_id} readOnly />
                </div>
                <div>
                    <strong>Content: </strong>
                    <input
                        value={note?.content}
                        readOnly
                    />
                </div>
                <div>
                    <strong>Important: </strong>
                    <input value={note?.important ? 'important' : 'non-important'} readOnly />
                </div>
                <button onClick={setEditable}>edit</button>
        </form>
    )
}

export default ReadNote