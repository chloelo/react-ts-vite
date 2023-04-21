import { useRef } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    inputRef.current!.focus()
  }
  const challenge = (
    <>
      <p>點了 search 按鈕，input 要 focus</p>
    </>
  );
  const ans = (
    <>
      <p>input 加上 ref</p>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={1}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='gifted-cannon-zv288m'
        solutionIFrameTitle='fancy-hooks-qrnur0'
      >
        <>
          <nav>
            <button className='block mb-3' onClick={handleClick}>
              Search
            </button>
          </nav>
          <input placeholder='Looking for something?' ref={inputRef} />
        </>
      </ChallengeLayout>
    </>
  );
}
