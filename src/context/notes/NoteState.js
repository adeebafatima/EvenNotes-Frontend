import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //CREATE a note
  const createNote = async (title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOWExNGEwOTkwZDFmZDc1OGVkNjFhIn0sImlhdCI6MTY0MjcwMTIzNn0.gFA0BmStTgmkP6QjFfKF3NJXqnZBsE7Kmee66DOQxrA",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "613227f119553781a8ca8d0e0812",
      user: "6131dc5e3e4037cd4734a066",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //READ notes
  const readNotes = async () => {
    //API call

    const response = await fetch(`${host}/api/notes/readnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOWExNGEwOTkwZDFmZDc1OGVkNjFhIn0sImlhdCI6MTY0MjcwMTIzNn0.gFA0BmStTgmkP6QjFfKF3NJXqnZBsE7Kmee66DOQxrA",
      },
    });
    const json = await response.json();
    console.log(json);
  };

  //UPDATE a note
  const updateNote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOWExNGEwOTkwZDFmZDc1OGVkNjFhIn0sImlhdCI6MTY0MjcwMTIzNn0.gFA0BmStTgmkP6QjFfKF3NJXqnZBsE7Kmee66DOQxrA",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to update note in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //DELETE a note
  const deleteNote = (id) => {
    //API call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, createNote, readNotes, updateNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
