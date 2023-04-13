import ChallengeLayout from '../../../ChallengeLayout';

function Profile() {
  return (
    <>
      <ChallengeLayout
        challengeTxt='沒有加 export default，畫面噴錯'
        answer='把 function component export 出去即可'
        chIdx={0}
        secIdx={0}
        challengeIdx={0}
        challengeIFrameTitle='bold-minsky-uc8qbf'
        solutionIFrameTitle='pedantic-matan-sqec3z'
      >
        <img src='https://i.imgur.com/lICfvbD.jpg' alt='Aklilu Lemma' />
      </ChallengeLayout>
    </>
  );
}
export default Profile;
