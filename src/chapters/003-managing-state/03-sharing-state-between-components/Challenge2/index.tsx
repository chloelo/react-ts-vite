// import "./index.css";

import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import {
  filterItems,
  FilterItemsType,
  foods,
} from './data';

type ChangeEventInputProps = React.ChangeEvent<HTMLInputElement>;

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const filterResult = filterItems(foods, query);

  function handleChange(e: ChangeEventInputProps) {
    setQuery(e.target.value);
  }
  const challenge = (
    <>
      <p>說明待完成，之後補上</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={2}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='keen-burnell-yl79b3'
        solutionIFrameTitle='romantic-pascal-clf0mv'
      >
        <div className=''>
          <SearchBar query={query} handleChange={handleChange} />
          <hr />
          <List items={filterResult} />
        </div>
      </ChallengeLayout>
    </>
  );
}
type SearchBarProps = {
  query: string;
  handleChange: (e: ChangeEventInputProps) => void;
};
function SearchBar({ query, handleChange }: SearchBarProps) {
  // const [query, setQuery] = useState('');

  // function handleChange(e: ChangeEventInputProps) {
  //   setQuery(e.target.value);
  // }

  return (
    <>
      <label>
        Search: <input value={query} onChange={handleChange} />
      </label>
      <p>{query}</p>
    </>
  );
}

function List({ items }: { items: FilterItemsType[] }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
