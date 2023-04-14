import ChallengeLayout from '../../../ChallengeLayout';

function Profile() {
  const ans = (
    <>
      return 後面不能直接換行，加上小括號 <code>()</code>即可
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={0}
        secIdx={0}
        challengeIdx={1}
        challengeTxt='畫面沒有正常 return'
        answer={ans}
        challengeIFrameTitle='intelligent-shadow-fggp8l'
        solutionIFrameTitle='nifty-wilson-hik8g3'
      >
        <img src='https://i.imgur.com/jA8hHMpm.jpg' alt='Katsuko Saruhashi' />
      </ChallengeLayout>
    </>
  );
}
export default Profile;

// 原題目：
// export default function Profile() {
//   return
//     <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
// }
