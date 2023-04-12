// import "./challenge2.css";

import ChallengeLayout from '../../../ChallengeLayout';
import Profile from './Profile';

export default function App() {
  const challenge = (
    <>
      <ol>
        <li>按了 collapse 按鈕之後再按展開按鈕，檔案會變成都是同一個人，請修復</li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          將 currentPerson 變數移除，因為是組件外的變數，會有不可預期的副作用，直接將 prop <code>person</code> 傳入 <code>Header</code>和 <code>Avatar</code>組件即可
        </li>
        
      </ol>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={0}
        secIdx={7}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='exciting-lehmann-t1kszl'
        solutionIFrameTitle='quizzical-voice-f1wxr7'
      >
        <div className='challenge01-08-wrap'>
          <Profile
            person={{
              imageId: 'lrWQx8l',
              name: 'Subrahmanyan Chandrasekhar',
            }}
          />
          <Profile
            person={{
              imageId: 'MK3eW3A',
              name: 'quizzical-voice-f1wxr7',
            }}
          />
        </div>
      </ChallengeLayout>
    </>
  );
}
