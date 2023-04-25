import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import Counter from './Counter';

export function Form() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? 'Hide' : 'Show'} counter
      </button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}

export default function App() {
  const challenge = (
    <>
      <p>Counter 元件每秒會跑一次，每一次數字遞增加 1，但目前畫面看起來是遞增 +2，為什麼？請修復</p>
    </>
  );
  const ans = <p>React 因為嚴格模式下檢查，所以跑了兩次，主要是醒目的讓你知道可能有些程式碼要改寫，此題要解決的方式就是增加 cleanup callback，每次重新掛載前會先清除之前的副作用</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={2}
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='suspicious-snow-iicsbk'
        solutionIFrameTitle='frosty-torvalds-erjxfc'
      >
        <>
          <Form />
        </>
      </ChallengeLayout>
    </>
  );
}
