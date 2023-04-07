import './index.css';

import ChallengeLayout from '../../../ChallengeLayout';

function Profile() {
  return <img src='https://i.imgur.com/QIrZWGIs.jpg' alt='Alan L. Hart' />;
}
export default function Gallery() {
  return (
    <>
      <ChallengeLayout
        title='Challenge 3 of 4: Spot the mistake'
        challengeTxt='profile component 沒有正常顯現'
        answer='將 profile 開頭改成大寫即可，React 分辨 HTML 元素是依據 component 開頭是否大寫'
      >
        <section>
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
