import { chapters } from '../assets/chaptersData';
import ChallengeIFrame from './ChallengeIFrame';

export type ChallengeLayoutProps = {
  children: React.ReactNode;
  challengeTxt: JSX.Element | string;
  answer: JSX.Element | string;
  chIdx: number;
  secIdx: number;
  challengeIdx: number;
  challengeIFrameTitle: string;
  solutionIFrameTitle?: string;
};

export default function ChallengeLayout({
  children,
  challengeTxt,
  answer,
  chIdx,
  secIdx,
  challengeIdx,
  challengeIFrameTitle,
  solutionIFrameTitle,
}: ChallengeLayoutProps) {
  const ary = chapters[chIdx]?.sections[secIdx]?.challenges;
  const challengeStr = ary[challengeIdx];
  const challengeTitle = (
    <h3>
      Challenge {challengeIdx + 1} of {ary.length}:{' '}
      <span dangerouslySetInnerHTML={{ __html: challengeStr }}></span>
    </h3>
  );
  return (
    <>
      {challengeTitle}
      <div className='faq'>
        <dl className='que'>
          <dt>挑戰：</dt>
          <dd>{challengeTxt}</dd>
        </dl>
        <ChallengeIFrame title={challengeIFrameTitle} />
        <dl className='ans'>
          <dt>解法：</dt>
          <dd>{answer}</dd>
        </dl>
      </div>
      <div className='challenge-wrap'>
        <div className='self-ans'>
          <h4>自我練習：</h4>
          {children}
        </div>
        <h4>官網解法：</h4>
        {solutionIFrameTitle && <ChallengeIFrame title={solutionIFrameTitle} />}
      </div>
    </>
  );
}
