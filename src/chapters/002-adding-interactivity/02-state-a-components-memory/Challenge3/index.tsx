import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  const challenge = (
    <p>
      畫面上點擊 Send 按鈕後就出現 Error，請找出問題並修復。
    </p>
  );
  const ans = (
    <p>原程式碼將 useState 宣告在判斷條件式裡，無法正常 render，把 useState 移至 component 裡最上方即可</p>
  );
  let view = (
    <>
      <p>
        
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type='submit'>Send</button>
      </form>
    </>
  );
  if (isSent) {
    // return <h1>Thank you!</h1>;
    view = <h1>Thank you!</h1>;
  }
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={1}
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='misty-river-p5k6nq'
        solutionIFrameTitle='friendly-cohen-9yg2ec'
      >
        {view}
      </ChallengeLayout>
    </>
  );
}
