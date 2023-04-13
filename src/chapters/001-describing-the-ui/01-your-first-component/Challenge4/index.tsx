import ChallengeLayout from '../../../ChallengeLayout';

function Congratulations () {
  
  return (
    <>
      <ChallengeLayout
        chIdx={0} 
        secIdx={0}
        challengeIdx={3}
        challengeTxt="寫一個自定義的 component"
        answer='建立組件 Congratulations，可以在畫面上顯示 Hello React!'
        challengeIFrameTitle='pensive-scooby-nxjlhi'
        solutionIFrameTitle='pedantic-gould-hd7u59'
      >
        <h1>Hello React!</h1>
        <p>我是組件 Congratulations</p>
      </ChallengeLayout>
    </>
  );
}
export default Congratulations ;
