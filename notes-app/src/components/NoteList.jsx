import React, { useState } from "react";
import { NoteItem } from "./NoteItem";
import { useSelector } from "react-redux";

export const NoteList = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const [query, setQuery] = useState("");
  const sortedArray = [...notes].sort((a, b) => {
    if (query === "id-ascend") {
      return a.id - b.id;
    } else if (query === "id-descend") {
      return b.id - a.id;
    } else if (query === "title-ascend") {
      return a.title.localeCompare(b.title);
    } else if (query === "title-descend") {
      return b.title.localeCompare(a.title);
    } else {
      return b.id - a.id;
    }
  });

  return (
    <>
      <form className="form mt-3">
        <label style={{ fontWeight: "bold", textDecoration: "underline" }}>
          Sort Notes:{" "}
        </label>
        <span style={{ marginLeft: "5px" }}></span>
        <select
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            backgroundColor: "grey",
            borderRadius: "5px",
            color: "white",
            outline: "none",
          }}
        >
          <option value="default">Default</option>
          <option value="id-ascend">ID Ascending</option>
          <option value="id-descend">ID Descending</option>
          <option value="title-ascend">Title (A-Z)</option>
          <option value="title-descend">Title (Z-A)</option>
        </select>
      </form>
      <table className="table table-striped table-bordered mt-2">
        <thead>
          <tr className="table-dark">
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {sortedArray.map((note, index) => (
            <NoteItem
              key={index}
              id={note.id}
              title={note.title}
              body={note.body}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
