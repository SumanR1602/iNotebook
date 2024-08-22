import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

export default function AddNote(props) {
    const context = useContext(noteContext);
    const {addNote } = context

    const [note,setNote]=useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added Notes Successfully","success")
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3 mb-5">
        <h1 className='mb-4'>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className='mb-2 fs-5'>Title</label>
            <input type="text" className="form-control" id="title" name='title'  placeholder="Enter title" onChange={onChange} minLength={5} required value={note.title} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className='mb-2 fs-5' >Description</label>
            <textarea rows={10} className="form-control" id="description" name='description' placeholder="Describe Your Thoughts.." onChange={onChange} minLength={5} required value={note.description}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className='mb-1 fs-5'>Tags</label>
            <p style={{fontSize:"16px",opacity:0.5}} className='mb-3'>(Separate tags using space)</p>
            <input type="text" className="form-control" id="tag" name='tag' placeholder="#..." onChange={onChange} minLength={5} required value={note.tag}/>
          </div>
          <button disabled={note.title.length<5|| note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
  )
}
