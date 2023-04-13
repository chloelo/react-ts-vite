// import "./challenge3.css";

import {
  useEffect,
  useState,
} from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import StoryTray from './StoryTray';

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

export default function App() {
  let [stories, setStories] = useState([...initialStories]);
  let time = useTime();

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }
  const challenge = (
    <>
      <ol>
        <li>畫面無止盡的跑迴圈，找出問題並修復</li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          畫面因為時間改變每秒都會重新渲染一次，<code>StoryTray</code> component
          直接更改了傳入的 prop <code>stories</code>，Strict Mode 因為檢查會多跑一次，造成嚴重的副作用，無止盡的迴圈
        </li>
        <li>不要直接改變 props，如果要改變，複製一份資料出來再去改動</li>
        <li>有些 array 方法會改到原陣列，要使用不會改到原資料的方法</li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={7}
      challengeIdx={1}
      challengeTxt={challenge}
      answer={ans}
      challengeIFrameTitle='admiring-http-nvnl0g'
      solutionIFrameTitle='infallible-cloud-rhlv73'
    >
      <div className='challenge01-08-wrap-03'>
        <div
          style={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <h2>It is {time.toLocaleTimeString()} now.</h2>
          <StoryTray stories={stories} />
        </div>
      </div>
    </ChallengeLayout>
  );
}

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
