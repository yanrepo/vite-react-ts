import css from './ListNote.module.css';
import { useState, useRef } from 'react';

type Note = {
  date: string;
  note: string;
};

interface INotes {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export default function ListNote({
  notes,
  setNotes,
}: INotes): JSX.Element {
  const [render, setRender] = useState<number>(0);

  let itemStart: React.MutableRefObject<number> = useRef(0);
  let itemDrop: React.MutableRefObject<number> = useRef(0);

  const dragStart = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ): void => {
    itemStart.current = index;
  };

  const dragOver = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ): void => {
    e.preventDefault();
    itemDrop.current = index;
  };

  const dragDrop = (
    e: React.DragEvent<HTMLLIElement>,
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
  ): void => {
    const newNotes: Note[] = notes;
    const dragNote: Note = newNotes[itemStart.current];
    newNotes.splice(itemStart.current, 1);
    newNotes.splice(itemDrop.current, 0, dragNote);
    itemStart.current = 0;
    itemDrop.current = 0;
    setNotes(newNotes);
    setRender(render + 1);
  };

  return (
    <ul>
      {notes.map((note: Note, index: number) => (
        <li
          className={css.box}
          key={index + note.date + note.note}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragOver={(e) => dragOver(e, index)}
          onDrop={(e) => dragDrop(e, setNotes)}
        >
          <div className={css.top}>{note.date}</div>
          <div className={css.body}>{note.note}</div>
        </li>
      ))}
    </ul>
  );
}
