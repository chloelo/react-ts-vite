import { chapters } from '../assets/chaptersData';

export type ChallengeLayoutProps = {
  children: React.ReactNode;
  challengeTxt: JSX.Element | string;
  answer: JSX.Element | string;
  chIdx: number;
  secIdx: number;
  challengeIdx: number;
};

export default function ChallengeLayout({
  children,
  challengeTxt,
  answer,
  chIdx,
  secIdx,
  challengeIdx,
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
        <dl className='ans'>
          <dt>解法：</dt>
          <dd>{answer}</dd>
        </dl>
      </div>
      <div className='challenge-wrap'>{children}</div>
    </>
  );
}
