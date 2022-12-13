import css from './FormNote.module.css';
import { useState } from 'react';
import { Note } from './types';

interface INotes {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export default function FormNote({
  notes,
  setNotes,
}: INotes): JSX.Element {
  const [form, setForm] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
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
    <form className={css.box} onSubmit={handleSubmit}>
      <textarea
        className={css.input}
        value={form}
        autoFocus={true}
        onChange={handleChange}
      />
      <input className={css.button} type="submit" value="Save" />
    </form>
  );
}
