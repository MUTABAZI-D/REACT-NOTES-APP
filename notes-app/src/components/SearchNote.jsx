import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SearchItem } from "./SearchItem";

export const SearchNote = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="form-control mt-5"
          placeholder="Search a note by body or title"
        />
        <button className="btn btn-secondary mt-2">Search note</button>
      </form>
      {query && (
        <table className="table table-striped table-bordered mt-2">
          <thead>
            <tr className="table-success">
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotes.map((note, index) => (
              <SearchItem
                key={index}
                id={note.id}
                title={note.title}
                body={note.body}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
