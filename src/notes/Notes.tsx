import { useState } from 'react';
import FormNote from './FormNote';
import ListNote from './ListNote';

const initNotes = [
  {
    date: 'HAPPY NEW YEAR!',
    note: 'first note',
  },
];

type Note = {
  date: string;
  note: string;
};

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>(initNotes);

  return (
    <div>
      <FormNote notes={notes} setNotes={setNotes} />
      <ListNote notes={notes} setNotes={setNotes} />
    </div>
  );
}
