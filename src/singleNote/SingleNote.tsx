import css from './SingleNote.module.css';

interface ISingleNote {
  oneNote: { date: string; note: string };
}

export default function SingleNote({
  oneNote,
}: ISingleNote): JSX.Element {
  const { date, note } = oneNote;

  return (
    <li className={css.box} key={date}>
      <div className={css.top}>{date}</div>
      <div className={css.body}>{note}</div>
    </li>
  );
}
