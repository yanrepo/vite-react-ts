import { useState } from 'react';

type Note = {
  date: string;
  note: string;
};

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
    <form onSubmit={handleSubmit}>
      <label>
        Note:{' '}
        <input type="text" value={form} onChange={handleChange} />{' '}
      </label>
      <input type="submit" value="Save" />
    </form>
  );
}
