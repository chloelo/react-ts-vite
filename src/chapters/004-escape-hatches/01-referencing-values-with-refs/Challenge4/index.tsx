import {
  useRef,
  useState,
} from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function App() {
  const [text, setText] = useState('');
  const textRef = useRef(text);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  function handleSend() {
    setTimeout(() => {
      // alert('Sending: ' + text);
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  const challenge = (
    <>
      <p>
        目前按了send按鈕後，立馬在input上編輯文字，alert出來的內容是再次編輯前的文字，這是一般我們覺得合理的反饋，但有時候會有例外案例，請將此題調整成：按了send按鈕後持續編輯文字欄位，alert會跑出再次編輯的內容
      </p>
    </>
  );
  const ans = (
    <>
      <p>
        因為還是要渲染畫面，useState本身要保留，ref不會被快照，用textRef去紀錄alert時最新的text值
      </p>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={0}
        challengeIdx={3}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='withered-frog-g4ccr5'
        solutionIFrameTitle='friendly-rain-y8gl7o'
      >
        <>
          {/* <input value={text} onChange={(e) => setText(e.target.value)} /> */}
          <input value={text} onChange={handleChange} />
          <button onClick={handleSend}>Send</button>
        </>
      </ChallengeLayout>
    </>
  );
}
