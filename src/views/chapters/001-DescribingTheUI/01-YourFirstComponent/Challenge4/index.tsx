import ChallengeLayout from '../../../ChallengeLayout';

function Congratulations () {
  
  return (
    <>
      <ChallengeLayout
        title="Challenge 4 of 4: Your own component"
        challengeTxt="寫一個自定義的 component"
        answer='建立組件 Congratulations，可以在畫面上顯示 Hello React!'
      >
        <h1>Hello React!</h1>
        <p>我是組件 Congratulations</p>
      </ChallengeLayout>
    </>
  );
}
export default Congratulations ;
