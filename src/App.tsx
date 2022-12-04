import './App.css';
import { useState } from 'react';
import initStateNotes from './initStateNotes.json';
import SingleNote from './singleNote/SingleNote';

export default function App() {
  const [notes, setNotes] = useState(initStateNotes);
  const [form, setForm] = useState('');

  type Note = {
    date: string;
    note: string;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setForm(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const trimmed: string = form.trim();
    if (trimmed !== '') {
      const date: string = new Date().toLocaleString();
      const newNote: Note = {
        date: date,
        note: trimmed,
      };
      setNotes([newNote, ...notes]);
      setForm('');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={form} onChange={handleChange} />
        <input type="submit" value="Save" />
      </form>

      <ul>
        {notes.map((oneNote: Note) => (
          <SingleNote oneNote={oneNote} />
        ))}
      </ul>
    </div>
  );
}
