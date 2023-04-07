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
        title="Challenge 2 of 4: Fix the return statement"
        challengeTxt="畫面沒有正常 return"
        answer={ans}
      >
        <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
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
