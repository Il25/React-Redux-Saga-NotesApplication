import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteData, saveChangesData } from "../../redux/notes/actions";
import "./index.css";

const Notes = ({allNotes, deleteNote, saveNotesChanges}) => {    
    const [isEditMode, setEditMode] = useState(true);
    const [changeNote, setChangeNote] = useState({});

    const chandeEditMode = (data) => {
        setEditMode(false);
        setChangeNote({...data});
    };  
    
    const saveNoteChanges = () => {
        saveNotesChanges(changeNote)
        setEditMode(true);
    };

    return(
        <div className="notes_container">  
            {isEditMode ? 
                <div> 
                    {allNotes.map((note, i) => (
                        <div key={i} className="note_container">
                            <div className="note_div">
                               <i className="i_note">Title: </i> {note.title}
                            </div>
                            <div className="note_div">
                               <i className="i_note">Description: </i>  {note.description}
                            </div>
                            <div>
                                <button onClick={() => chandeEditMode(note)} className="note_button">Edit</button>
                                <button onClick={() => deleteNote(note.id)} className="note_button">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            : 
                <div className="changes_note_container">
                    <input placeholder="Title" defaultValue={changeNote.title} onChange={(e) => {setChangeNote(prevState => ({
                        ...prevState,
                        title: e.target.value,
                    }))}}></input>
                    <textarea className="changes_textarea" placeholder="Description" defaultValue={changeNote.description} onChange={(e) => {setChangeNote(prevState => ({
                        ...prevState,
                        description: e.target.value,
                    }))}}></textarea>
                    <div>
                        <button className="note_button" onClick={() => saveNoteChanges(changeNote)}>Save</button>
                        <button className="note_button" onClick={() => setEditMode(true)}>Cancel</button>
                    </div>
                </div>
            }      
        </div>
    );
};

const mapStateToProps = (state) => {
    return({
        allNotes: state.notes.list,
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        deleteNote: (id) => dispatch(deleteData(id)),
        saveNotesChanges: (data) => dispatch(saveChangesData(data)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);