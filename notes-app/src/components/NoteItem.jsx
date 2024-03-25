import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/NoteSlice";

export const NoteItem = ({ id, title, body }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteNote(id))}
        >
          X
        </button>
      </td>
    </tr>
  );
};
