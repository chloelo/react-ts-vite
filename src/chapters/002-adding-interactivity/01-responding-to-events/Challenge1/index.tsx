// import "./index.css";

import ChallengeLayout from '../../../ChallengeLayout';

export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }
  const challenge = (
    <p>按鈕點擊要切換背景色，目前狀態無法正常顯示，請修復</p>
  );
  const ans = (
    <p>將 onClick 綁定的 handleClick 函式小括號移除即可</p>
  );
  return (
    <ChallengeLayout
      chIdx={1}
      secIdx={0}
      challengeIdx={0}
      challengeTxt={challenge}
      answer={ans}
      challengeIFrameTitle='agitated-ellis-jy0lkt'
      solutionIFrameTitle='twilight-water-zont0s'
    >
      <button onClick={handleClick}>Toggle the lights</button>
    </ChallengeLayout>
  );
}
