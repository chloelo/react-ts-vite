
import { DataLetterType } from './data';

type LetterProps = {
  letter: DataLetterType;
  isSelected: boolean;
  onToggle: (id: number) => void
}

export default function Letter({
  letter,
  onToggle,
  isSelected,
}: LetterProps) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}

