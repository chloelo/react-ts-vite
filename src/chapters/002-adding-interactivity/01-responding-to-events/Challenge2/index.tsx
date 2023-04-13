import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import ColorSwitch from './ColorSwitch';

export default function App() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks((c) => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }
  const challenge = <p>面前畫面上有兩個事件，點擊頁面，counter 會顯示點擊了幾次，點擊按鈕要切換背景色，目前狀態 counter 有增加，背景色沒有，請修復</p>;
  const ans = <p>將 ColorSwitch 組件的 onClick 綁定傳進來的 prop 函示 onChangeColor 即可，但要避免點了按鈕之後外面的 counter 跟著遞增，所以記得加上停止冒泡行為</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={0}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='relaxed-merkle-qmxzl1'
        solutionIFrameTitle='brave-sky-v2x076'
      >
        <div
          style={{ width: '100%', height: '100%' }}
          onClick={handleClickOutside}
        >
          <ColorSwitch onChangeColor={handleChangeColor} />
          <br />
          <br />
          <h2>Clicks on the page: {clicks}</h2>
        </div>
      </ChallengeLayout>
    </>
  );
}
