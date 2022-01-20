import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "611322f19553781a18ca8d0e06",
      user: "6131dc5e3e4037cd4734a066",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.509Z",
      __v: 0,
    },
    {
      _id: "612322f19553781a8ca18d0e08",
      user: "6131dc5e3e4037cd4734a066",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
    {
      _id: "613322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a066",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
    {
      _id: "613422f19553781a8ca8d0e018",
      user: "6131dc5e3e4037cd4734a066",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
    {
      _id: "6135122f19553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a066",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
    {
      _id: "613622f19553781a8ca8d0e0118",
      user: "6131dc5e3e4037cd4734a066",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
    {
      _id: "613227f119553781a8ca8d0e0812",
      user: "6131dc5e3e4037cd4734a066",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //CREATE a note
  const createNote = (title, description, tag) => {
    //TODO: API call
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

  //DELETE a note
  const deleteNote = () => {};

  //UPDATE a note
  const updateNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, createNote, deleteNote, updateNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
