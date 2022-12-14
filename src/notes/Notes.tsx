import { useState } from 'react';
import { Note } from './types';
import FormNote from './FormNote';
import ListNote from './ListNote';

const initNotes = [
  {
    date: 'HAPPY NEW YEAR!',
    note: 'first note',
  },
];

export default function Notes(): JSX.Element {
  const [notes, setNotes] = useState<Note[]>(initNotes);

  return (
    <div>
      <FormNote notes={notes} setNotes={setNotes} />
      <ListNote notes={notes} setNotes={setNotes} />
    </div>
  );
}
