import NoteContext from "./noteContext";

const NoteState = (props) => {

  const state={
      "name":"Harry",
      "class":"5B"
  }
  return <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
