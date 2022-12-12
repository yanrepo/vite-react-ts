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
    _e: React.DragEvent<HTMLDivElement>,
    index: number
  ): void => {
    itemStart.current = index;
  };

  const dragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ): void => {
    e.preventDefault();
    itemDrop.current = index;
  };

  const dragDrop = (
    _e: React.DragEvent<HTMLDivElement>,
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

  const removeNote = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    let id = e.currentTarget.id;
    setNotes(
      notes.filter((_oneNote, index) => index !== parseInt(id, 10))
    );
  };

  return (
    <div className={css.ulnote}>
      {notes.map((note: Note, index: number) => (
        <div
          className={css.linote}
          key={index + note.date + note.note}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragOver={(e) => dragOver(e, index)}
          onDrop={(e) => dragDrop(e, setNotes)}
        >
          <div className={css.top}>
            <button
              id={index.toString()}
              className={css.remove}
              title="Remove note"
              onClick={(e) => removeNote(e)}
            >
              X
            </button>
            <div className={css.header}>{note.date}</div>
          </div>
          <div className={css.body}>{note.note}</div>
        </div>
      ))}
    </div>
  );
}
