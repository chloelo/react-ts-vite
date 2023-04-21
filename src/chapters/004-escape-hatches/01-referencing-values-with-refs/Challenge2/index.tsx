import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function App() {
  // const isOnRef = useRef(false);
  const [isOn, setIsOn] = useState(false);
  const challenge = (
    <>
      <p>按鈕點擊之後要自動切換 'On'、'Off'，請修復</p>
    </>
  );
  const ans = <p>因為要及時渲染到畫面，所以這裡不該用ref，改用 useState</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={0}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='peaceful-sanne-xdw8pn'
        solutionIFrameTitle='fervent-drake-qnmvdw'
      >
        <>
          <button
            onClick={() => {
              setIsOn(!isOn);
            }}
          >
            {isOn ? 'On' : 'Off'}
          </button>
          {/* <button
            onClick={() => {
              isOnRef.current = !isOnRef.current;
            }}
          >
            {isOnRef.current ? 'On' : 'Off'}
          </button> */}
        </>
      </ChallengeLayout>
    </>
  );
}
