import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "../features/NoteSlice";

export const NoteForm = () => {
  const [fieldDisable, setFieldDisable] = useState(true);
  const [buttonContent, setButtonContent] = useState("Update Note");
  const notes = useSelector((state) => state.notesReducer.notes);
  const [note, setNote] = useState({ title: "", body: "" });
  const [updatedId, setUpdatedId] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addNote(note));
    console.log(notes);
    setNote({ title: "", body: "" });
  }
  function handleClick() {
    setFieldDisable(!fieldDisable);
    fieldDisable
      ? setButtonContent("Confirm Update")
      : setButtonContent("Update Note");
    dispatch(updateNote({ updatedId, note }));
    setNote({ title: "", body: "" });
    setUpdatedId("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={updatedId}
          onChange={(e) => setUpdatedId(Number(e.target.value))}
          type="number"
          className="form-control mt-3"
          placeholder="Select ID of a note you want to update from table"
          disabled={fieldDisable}
          required
        />
        <input
          type="text"
          className="form-control mt-3"
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
        <button className="btn btn-primary mt-2">Add Note</button>
        <span style={{ marginLeft: "5px" }}></span>
        <button className="btn btn-success mt-2" onClick={handleClick}>
          {buttonContent}
        </button>
      </form>
    </div>
  );
};
