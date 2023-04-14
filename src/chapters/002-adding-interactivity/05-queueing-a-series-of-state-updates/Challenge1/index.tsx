import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((prePending) => prePending + 1);
    // setPending(pending + 1);
    await delay(3000);
    setPending((prePending) => prePending - 1);
    setCompleted((preCompleted) => preCompleted + 1);
    // setPending(pending - 1);
    // setCompleted(completed + 1);
  }
  const challenge = (
    <>
      <p>
        您正在開發一個藝術品市場 App，該 App 允許用戶同時為一件藝術品提交多個訂單。每次用戶按下 “Buy” 按鈕時，“Pending” 計數器應該加一。三秒後，“Pending” 計數器應該減少，“Completed” 計數器應該增加。
        <br />
      </p>
      <p>
        但是， “Pending” 計數器的行為並不像預期的那樣。當您按下 “Buy” 時，它會減少到 -1 （這應該是不可能的！）。如果您快速單擊兩次，兩個計數器的行為似乎都無法預測。
        <br />
        為什麼會這樣？修復兩個計數器。
      </p>
    </>
  );
  const ans = (
    <p>
      要呈現狀態的遞增遞減就不能用給純值取代更新佇列的方式，改寫成回呼函式即可
    </p>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={4}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='beautiful-dhawan-sue2hu'
        solutionIFrameTitle='dreamy-wilson-1l47g9'
      >
        <h3>Pending: {pending}</h3>
        <h3>Completed: {completed}</h3>
        <button onClick={handleClick}>Buy</button>
      </ChallengeLayout>
    </>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
