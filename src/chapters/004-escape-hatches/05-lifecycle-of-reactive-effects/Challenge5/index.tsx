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
        chIdx={3}
        secIdx={4}
        challengeIdx={4}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='stoic-golick-x0vpod'
        solutionIFrameTitle='vibrant-rhodes-gkinsn'
      >
        <>
          <div>顯示挑戰 iframe 未同步更新</div>
        </>
      </ChallengeLayout>
    </>
  );
}
