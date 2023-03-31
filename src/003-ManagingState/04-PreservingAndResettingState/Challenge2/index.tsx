import { useState } from 'react';
import './index.css'

export default function App() {
  const [reverse, setReverse] = useState(false);
  const title = (
    <h1>Challenge 2 of 5: Swap two form fields </h1>
  )
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        {title}
        <Field key='LastName' label="Last name" />
        <Field key='FirstName' label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        {title}
        <Field key='FirstName' label="First name" />
        <Field key='LastName' label="Last name" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }: { label: string }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
