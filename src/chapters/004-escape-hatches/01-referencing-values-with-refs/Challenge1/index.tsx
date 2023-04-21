import {
  useRef,
  useState,
} from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function App() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | number>(0);
  // let timeoutID = null;
  function handleSend() {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutRef.current);
  }
  const challenge = (
    <>
      <p>send 按鈕送出後，再按undo按鈕，3秒後還是會alert顯示 sent，請修復。</p>
    </>
  );
  const ans = (
    <>
      <ul>
        <li>
          為什麼不能用一般變數宣告
          timeID？因為每一次重新渲染，一般變數也會回到初始值，所以要用ref的方式把值給記錄下來，又不會因為畫面渲染而讓值改變
        </li>
        <li>用useRefs時，宣告 timeID 型別有誤，有從網路上找到解法：<br />
        <code>{`const timeoutRef = useRef<NodeJS.Timeout | number>(0);`}</code>
        </li>
      </ul>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={0}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='upbeat-pascal-ukotpt'
        solutionIFrameTitle='proud-lake-ev6pi0'
      >
        <>
          <input
            disabled={isSending}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button disabled={isSending} onClick={handleSend}>
            {isSending ? 'Sending...' : 'Send'}
          </button>
          {isSending && <button onClick={handleUndo}>Undo</button>}
        </>
      </ChallengeLayout>
    </>
  );
}
