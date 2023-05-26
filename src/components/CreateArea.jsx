import { useState } from "react";

export default function CreateArea({onAdd}) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function addNote(event) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}
