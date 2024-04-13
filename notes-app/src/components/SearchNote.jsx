import React from "react";
import { useDispatch } from "react-redux";
import { filterNotes } from "../features/NoteSlice";

export const SearchNote = () => {
  const dispatch = useDispatch();
  return (
    <form className="form mt-4">
      <label style={{ fontWeight: "bold", textDecoration: "underline" }}>
        Search Notes:{" "}
      </label>
      <input
        onChange={(e) => dispatch(filterNotes(e.target.value))}
        type="text"
        className="form-control mt-2"
        placeholder="Search a note by body or title"
      />
    </form>
  );
};
