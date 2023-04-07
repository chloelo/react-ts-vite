import "./index.css";

import { useState } from "react";

import { filterItems, FilterItemsType, foods } from "./data";

type ChangeEventInputProps = React.ChangeEvent<HTMLInputElement>;

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const filterResult = filterItems(foods, query);

  function handleChange(e: ChangeEventInputProps) {
    setQuery(e.target.value);
  }

  return (
    <>
      <h1>Challenge 2 of 2: Filtering a list </h1>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={filterResult} />
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
