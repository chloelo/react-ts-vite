import { useRef } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

export function Page() {
  const inputRef = useRef<HTMLInputElement>(null)
  function handleClick() {
    inputRef.current!.focus();
  }
  return (
    <>
      <nav>
        <SearchButton clickFn={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
export default function App() {
  const challenge = (
    <>
      <p>點擊 Search 按鈕後，下方 input 要能被 focus，但請注意 Button 和 input 是各自放在不同檔案的原件</p>
    </>
  );
  const ans = <p>練習使用 <code>forwardRef</code></p>;
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={1}
        challengeIdx={3}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='stoic-currying-jf1zc1'
        solutionIFrameTitle='musing-chihiro-mhxlfn'
      >
        <>
          <Page />
        </>
      </ChallengeLayout>
    </>
  );
}
