import { NavLink } from 'react-router-dom';

import ChallengeLayout from '../../../ChallengeLayout';

export default function FeedbackForm() {
  // const [name, setName] = useState('');

  function handleClick() {
    const name = prompt('What is your name?');
    // setName(ans);
    alert(`Hello, ${name}!`);
  }
  const challenge = (
    <p>
      畫面上點擊 Greet 按鈕會跳出視窗請使用者輸入文字，預期輸入完送出後會 alert
      Hello 加上剛剛輸入的文字，但目前跳出的 alert 都只有
      Hello，沒有使用者輸入的文字，請修復。
    </p>
  );
  const ans = (
    <ul>
      <li>
        state 變數只有在需要重新渲染時要 keep 住狀態才需要使用，
        此範例中，彈跳視窗輸入的值，不需要在畫面重新渲染時維持狀態，所以不要定義成
        state，用常規變數即可
      </li>
      <li>
        會在後面的章節 (<NavLink to='/ch02/sec04'>State as a Snapshot</NavLink>
        )解釋為何 state 在這裡沒有起作用
      </li>
    </ul>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={1}
        challengeIdx={3}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='focused-mccarthy-ec123d'
        solutionIFrameTitle='competent-cloud-wf58ch'
      >
        <button onClick={handleClick}>Greet</button>
      </ChallengeLayout>
    </>
  );
}
