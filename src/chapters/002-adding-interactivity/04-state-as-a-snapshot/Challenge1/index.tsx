import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(
      walk
        ? `Stop is next, now walk: ${walk}`
        : `Walk is next, now walk: ${walk}`
    );
  }
  const challenge = (
    <p>
      範例為一個簡易切換紅綠燈狀態的按鈕，新增 alert 到點擊事件，如果綠燈就 alert "Stop is next"，紅燈就 alert "Walk is next"，試著把 <code>setWalk</code>放在 alert 前後查看顯示是否有差別？
    </p>
  );
  const ans = (
    <p>不管 alert 和 setWalk 順序如何，結果是一樣的，因為 React 的 state 有快照機制</p>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={3}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='nameless-sun-t1utx3'
        solutionIFrameTitle='icy-sky-3s8poc'
      >
        <button onClick={handleClick}>
          Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1
          style={{
            color: walk ? 'darkgreen' : 'darkred',
          }}
        >
          {walk ? 'Walk' : 'Stop'}
        </h1>
      </ChallengeLayout>
    </>
  );
}
