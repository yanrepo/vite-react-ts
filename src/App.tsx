import './App.css';
import { useState } from 'react';
import initStateNotes from './initStateNotes.json';
import FormNote from './form/FormNote';
import ListNote from './list/ListNote';

type Note = {
  date: string;
  note: string;
};

export default function App() {
  const [notes, setNotes] = useState<Note[]>(initStateNotes);

  return (
    <div className="App">
      <FormNote notes={notes} setNotes={setNotes} />
      <ListNote notes={notes} setNotes={setNotes} />
    </div>
  );
}
