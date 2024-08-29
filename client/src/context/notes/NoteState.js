import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "https://i-notebook-sigma-eosin.vercel.app"
  const notesInitial =[]
  const [notes, setNotes] = useState(notesInitial)

  //Get notes
  const getNotes = async () => {
    // API Call to get notes
    // console.log("Getting notes..");
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json=await response.json()
    // console.log(json);
    setNotes(json)
  }

  //Add a note
  const addNote = async (title, description, tag) => {
    //TODO API CALL
    // console.log("Adding note");
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note=await response.json()
    setNotes(notes.concat(note))
  }

  //Delete Note
  const deleteNote = async(id) => {
    // TODO API CALL For deleting
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    // const json = response.json();
    // console.log(json);
    const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    // console.log("Editingg...");
    // API Call for editing Note
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
