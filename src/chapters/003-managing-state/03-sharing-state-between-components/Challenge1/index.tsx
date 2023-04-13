// import "./index.css";

import { useState } from 'react';

type ChangeEventInputProps = React.ChangeEvent<HTMLInputElement>;
type InputProps = {
  label: string;
  text: string;
  handleChange: (e: ChangeEventInputProps) => void;
};

export default function SyncedInputs() {
  const [text, setText] = useState("");
  function handleChange(e: ChangeEventInputProps) {
    setText(e.target.value);
  }

  return (
    <>
      <h1>Challenge 1 of 2: Synced inputs </h1>
      <Input label="First input" text={text} handleChange={handleChange} />
      <Input label="Second input" text={text} handleChange={handleChange} />
    </>
  );
}

function Input({ label, text, handleChange }: InputProps) {
  // const [text, setText] = useState('');

  // function handleChange(e) {
  //   // setText(e.target.value);
  // }

  return (
    <>
      <label>
        {label} <input value={text} onChange={handleChange} />
      </label>
    </>
  );
}
