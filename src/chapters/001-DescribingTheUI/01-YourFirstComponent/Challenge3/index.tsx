import ChallengeLayout from '../../../ChallengeLayout';

function Profile() {
  return <img src='https://i.imgur.com/QIrZWGIs.jpg' alt='Alan L. Hart' />;
}
export default function Gallery() {
  return (
    <>
      <ChallengeLayout
        chIdx={0} 
        secIdx={0}
        challengeIdx={2}
        challengeTxt='profile component 沒有正常顯現'
        answer='將 profile 開頭改成大寫即可，React 分辨 HTML 元素是依據 component 開頭是否大寫'
        challengeIFrameTitle='billowing-snowflake-u6n6nq'
        solutionIFrameTitle='vibrant-mcclintock-u29j5m'
      >
        <section className='challenge01-01-wrap'>
          <h1>Amazing scientists</h1>
          <Profile />
          <Profile />
          <Profile />
        </section>
      </ChallengeLayout>
    </>
  );
}

// 原題目：
// function profile() {
//   return (
//     <img
//       src="https://i.imgur.com/QIrZWGIs.jpg"
//       alt="Alan L. Hart"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <profile />
//       <profile />
//       <profile />
//     </section>
//   );
// }
