import React, { useContext, useEffect, useRef,useState } from 'react';
import Noteitem from './Noteitem';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

export default function Notes(props) {
    const context = useContext(noteContext);
    let navigate=useNavigate();
    const { notes, getNotes,editNote } = context;
    useEffect(() => {
        // console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate("/login");
        }
    },[]);

    const ref = useRef(null);
    const refClose = useRef(null);

    const [note,setNote]=useState({etitle:"",edescription:"",etag:""})


    const updateNote = (currentnote) => {
        ref.current.click();
        setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})

    };
    const handleClick=(e)=>{
        // console.log('Updating note',note);
        editNote(note.id,note.etitle,note.edescription,note.etag); 
        refClose.current.click();
        props.showAlert("Updated Successfully","success")
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription">Description</label>
                                    <textarea rows={6} className="form-control" id="edescription" name='edescription'
                                    value={note.edescription} onChange={onChange} minLength={5} required></textarea> 
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag">Tags</label>
                                    <input type="text" className="form-control" id="etag" value={note.etag} name='etag'onChange={onChange} minLength={5} required/>
                                </div>
                            </form>

                            
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose}  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h1 className='text-center'>Your Notes</h1>
                <div className="container text-center">
                {notes.length===0 && `No notes to display`}
                </div>
                
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
                })}
            </div>
        </>
    );
}
