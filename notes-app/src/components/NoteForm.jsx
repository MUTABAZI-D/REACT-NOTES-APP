import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, setSelectedNote, updateNote } from "../features/NoteSlice";

export const NoteForm = () => {
  const selectedNote = useSelector((state) => state.notesReducer.selectedNote);
  const [note, setNote] = useState({
    title: "",
    body: "",
  });
  const buttonColor = selectedNote ? "green" : " rgb(182, 112, 248)";
  useEffect(() => {
    if (selectedNote) {
      setNote({ title: selectedNote.title, body: selectedNote.body });
    }
  }, [selectedNote]);

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (selectedNote) {
      dispatch(updateNote({ id: selectedNote.id, note }));
      dispatch(setSelectedNote(null));
    } else {
      dispatch(addNote(note));
    }

    setNote({ title: "", body: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ marginTop: "60px" }}
        type="text"
        className="form-control "
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        required
      />
      <textarea
        rows="3"
        className="form-control mt-2"
        placeholder="Body"
        value={note.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        required
      ></textarea>
      <button
        style={{
          backgroundColor: buttonColor,
          color: "white",
          padding: "8px",
          marginTop: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          outline: "none",
          border: "none",
        }}
      >
        {selectedNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};
