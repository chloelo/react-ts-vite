import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import MyInput from './MyInput.js';

export function Form() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  const [upper, setUpper] = useState(false);
  const name = firstName + ' ' + lastName;
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? 'Hide' : 'Show'} form
      </button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>
            Hello, <b>{upper ? name.toUpperCase() : name}</b>
          </p>
        </>
      )}
    </>
  );
}

export default function App() {
  const challenge = (
    <>
      <p>目前題目使用了兩個 MyInput 元件，但永遠是第二個 input 被 focus，請改寫邏輯，目前有傳入 prop: shouldFocus，當 shouldFocus 為 true 時，讓收到的 input 被 focus</p>
    </>
  );
  const ans = (
    <>
      <p>useEffect 的相依要加入 shouldFocus，判斷如果是 true，當下的 input 就被 focus</p>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={2}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='cold-cdn-63g3g2'
        solutionIFrameTitle='reverent-pine-k44dv0'
      >
        <>
          <Form />
        </>
      </ChallengeLayout>
    </>
  );
}
