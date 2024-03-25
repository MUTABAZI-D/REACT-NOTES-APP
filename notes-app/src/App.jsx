import { NoteForm } from "./components/NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { NoteList } from "./components/NoteList";
import { SearchNote } from "./components/SearchNote";

function App() {
  return (
    <>
      <div className="container">
        <NoteForm />
        <SearchNote />
        <NoteList />
      </div>
    </>
  );
}

export default App;
