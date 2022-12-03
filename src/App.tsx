import './App.css';
import { useState } from 'react';
import initStateNotes from './initStateNotes.json';

export default function App() {
  const [notes, setNotes] = useState(initStateNotes);
  const [form, setForm] = useState('');

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
      const newNote = {
        date: date,
        note: trimmed,
      };
      setNotes([newNote, ...notes]);
    }
    setForm('');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={form} onChange={handleChange} />
        <input type="submit" value="Save" />
      </form>

      <ul>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <p>
                {note.note} ~ {note.date}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
