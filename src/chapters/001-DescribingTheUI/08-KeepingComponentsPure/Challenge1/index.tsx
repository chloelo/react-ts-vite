// import '../index.css';

import {
  useEffect,
  useState,
} from 'react';

import ChallengeLayout from '../../../ChallengeLayout.js';
import Clock from './Clock.js';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  const challenge = (
    <>
      <ol>
        <li>目前畫面噴錯，請修復壞掉的時鐘</li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          此題的範例因為直接修改 DOM，是完全沒必要的副作用，我們只要回傳
          JSX，綁定不同的 className 即可
        </li>
        <li>可以將時間寫死一個固定的時間 (0~6) 查看樣式是否有改變</li>
      </ol>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={0}
        secIdx={7}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='sleepy-hooks-vom5ve'
        solutionIFrameTitle='sharp-kate-wjgb3e'
      >
        <div className='challenge01-08-wrap'>
          <Clock time={time} />
        </div>
      </ChallengeLayout>
    </>
  );
}
