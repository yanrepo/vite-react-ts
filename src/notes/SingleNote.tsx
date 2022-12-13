import css from './SingleNote.module.css';
import { Note } from './types';

interface ISingleNote {
  note: Note;
  index: number;
  dragStart: (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => void;
  dragOver: (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => void;
  dragDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  removeNote: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SingleNote({
  note,
  index,
  dragStart,
  dragOver,
  dragDrop,
  removeNote,
}: ISingleNote) {
  return (
    <div
      className={css.box}
      draggable
      onDragStart={(e) => dragStart(e, index)}
      onDragOver={(e) => dragOver(e, index)}
      onDrop={(e) => dragDrop(e)}
    >
      <div className={css.top}>
        <button
          id={index.toString()}
          className={css.remove}
          title="Delete note"
          onClick={(e) => removeNote(e)}
        >
          X
        </button>
        <div className={css.title}>{note.date}</div>
      </div>
      <div className={css.body}>{note.note}</div>
    </div>
  );
}
