import ChallengeLayout from '../../../ChallengeLayout';

function Profile() {
  return (
    <>
      <ChallengeLayout
        title="Challenge 1 of 4: Export the component"
        challengeTxt="沒有加 export，畫面噴錯"
        answer="把 function component export 出去即可"
      >
        <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />
      </ChallengeLayout>
    </>
  );
}
export default Profile;
