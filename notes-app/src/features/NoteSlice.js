import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nextId: 1,
  notes: [],
  filteredNotes: [],
  selectedNote: null,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.unshift({ id: state.nextId++, ...action.payload });
      state.filteredNotes = state.notes;
    },
    filterNotes: (state, action) => {
      const searchTerm = action.payload;
      state.filteredNotes = state.notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
      state.filteredNotes = state.filteredNotes.filter(
        (note) => note.id !== id
      );
    },
    updateNote: (state, action) => {
      const { id, note } = action.payload;
      const index = state.notes.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.notes[index] = { ...state.notes[index], ...note };
        state.filteredNotes[index] = { ...state.filteredNotes[index], ...note };
      }
    },
    setSelectedNote: (state, action) => {
      state.selectedNote = action.payload;
    },
  },
});

export default noteSlice.reducer;
export const { addNote, filterNotes, deleteNote, updateNote, setSelectedNote } =
  noteSlice.actions;
