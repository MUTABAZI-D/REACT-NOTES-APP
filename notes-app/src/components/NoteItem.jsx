import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, setSelectedNote } from "../features/NoteSlice";

export const NoteItem = ({ note }) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const buttonColor = isClicked ? "rgb(234, 221, 221)" : "rgb(170, 212, 249)";
  function handleClick() {
    dispatch(setSelectedNote(note));
  }
  function handleFocus() {
    setIsClicked(true);
  }
  function handleBlur() {
    setIsClicked(false);
  }

  return (
    <tr>
      <td>{note.id}</td>
      <td>{note.title}</td>
      <td>{note.body}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteNote(note.id))}
        >
          X
        </button>
      </td>
      <td>
        <button
          style={{
            backgroundColor: buttonColor,
            color: "black",
            padding: "9px",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
            border: "none",
          }}
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};
