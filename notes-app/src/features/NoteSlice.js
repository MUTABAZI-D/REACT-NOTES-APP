import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  nextId: 1,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      //let nexId = state.notes.length + 1;
      state.notes.unshift({ id: state.nextId++, ...action.payload });
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
    },
    updateNote: (state, action) => {
      const { updatedId, note } = action.payload;
      const index = state.notes.findIndex((note) => note.id === updatedId);
      if (index !== -1) {
        state.notes[index] = { ...state.notes[index], ...note };
      }
    },
  },
});

export default noteSlice.reducer;
export const { addNote, deleteNote, updateNote } = noteSlice.actions;
