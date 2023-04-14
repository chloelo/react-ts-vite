import ChallengeLayout from '../../../ChallengeLayout';

export default function App() {
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
        secIdx={4}
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='vibrant-rhodes-gkinsn'
        solutionIFrameTitle='damp-water-589v8h'
      >
        <>
          <div>顯示挑戰 iframe 未同步更新</div>
        </>
      </ChallengeLayout>
    </>
  );
}
