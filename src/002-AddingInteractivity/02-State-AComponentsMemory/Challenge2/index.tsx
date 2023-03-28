import { useState } from 'react';
import { ChangeEventInputProps } from '../../../Types'
export default function Form() {
  // let firstName = '';
  // let lastName = '';
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function handleFirstNameChange(e: ChangeEventInputProps) {
    // firstName = e.target.value;
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e: ChangeEventInputProps) {
    // lastName = e.target.value;
    setLastName(e.target.value)
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
    // firstName = '';
    // lastName = '';
  }

  return (
    <>
      <h1>Challenge 2 of 4: Fix stuck form inputs</h1>
      <p>將兩個input欄位都綁定state</p>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hi, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reset</button>
      </form>
      {/* <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hi, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reset</button>
      </form> */}
    </>
  );
}
