// import "./index.css";

import ChallengeIFrame from '../../../ChallengeIFrame';
import ChallengeLayout from '../../../ChallengeLayout';

export default function EditProfile() {
  const challenge = (
    <>
      <p>說明待完成，之後補上</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={0}
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='eloquent-ace-nplpp9'
        solutionIFrameTitle='clever-frost-49fscz'
      >
        <div className='challenge03-01-wrap'>
          <p>
            此題挑戰與第二題一樣，官網提供有大部分結構程式碼，如果不知道從何開始寫，參考以下範例
          </p>
          <ChallengeIFrame title='vibrant-mopsa-f3ssst' />
          <p>如果沒有React的環境，如何呈現一樣的效果</p>
          {/* <a href='https://codesandbox.io/s/sharp-germain-f0f9bl' target='_blank'>
            {' '}
            code sandbox 練習的連結
          </a> */}

          <p>自己在 code sandbox 上的練習：</p>
          <ChallengeIFrame title='sharp-germain-f0f9bl' />
          <hr />
          <form>
            <label>
              First name: <b>Jane</b>
              <input />
            </label>
            <label>
              Last name: <b>Jacobs</b>
              <input />
            </label>
            <button type='submit'>Edit Profile</button>
            <p>
              <i>Hello, Jane Jacobs!</i>
            </p>
          </form>
        </div>
      </ChallengeLayout>
    </>
  );
}
