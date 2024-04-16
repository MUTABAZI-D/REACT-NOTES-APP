import { configureStore } from "@reduxjs/toolkit";
import notesSliceReducer from "../features/NoteSlice";

const store = configureStore({
  reducer: {
    notesReducer: notesSliceReducer,
  },
});

export default store;
