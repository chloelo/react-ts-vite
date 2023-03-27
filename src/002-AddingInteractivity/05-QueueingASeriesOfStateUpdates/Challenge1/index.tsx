import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(prePending => prePending + 1);
    // setPending(pending + 1);
    await delay(3000);
    setPending(prePending => prePending - 1);
    setCompleted(preCompleted => preCompleted + 1);
    // setPending(pending - 1);
    // setCompleted(completed + 1);
  }

  return (
    <>
      <h1>Challenge 1 of 2: Fix a request counter </h1>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
