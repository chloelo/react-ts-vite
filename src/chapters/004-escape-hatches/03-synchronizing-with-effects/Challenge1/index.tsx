import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import MyInput from './MyInput';

export function Form() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Taylor');
  const [upper, setUpper] = useState(false);
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
            Enter your name:
            <MyInput value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <input
              type='checkbox'
              checked={upper}
              onChange={(e) => setUpper(e.target.checked)}
            />
            Make it uppercase
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
      <p>
        當 form 組件顯示時， MyInput
        元件要自動 focus，但切換大小寫的 checkbox 時，focus 狀態要移除
      </p>
    </>
  );
  const ans = (
    <p>
      畫面 rendering 時不該有任何副作用，所以將 focus 放到 hook - useEffect
      裡，但不要每次 re-render 就 focus，要加入 dependencies 空陣列，只在
      mounted 的時候 focus
    </p>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={2}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='enodochial-maxwell-sn5o5h'
        solutionIFrameTitle='goofy-gates-2he3vw'
      >
        <>
          <Form />
        </>
      </ChallengeLayout>
    </>
  );
}
