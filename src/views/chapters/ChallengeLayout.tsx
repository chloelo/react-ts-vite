export type ChallengeLayoutProps = {
  children: React.ReactNode;
  challengeTxt: JSX.Element | string;
  answer: JSX.Element | string;
  title: string;
};
export default function ChallengeLayout({
  children,
  challengeTxt,
  answer,
  title,
}: ChallengeLayoutProps) {
  return (
    <>
      <h3>{title}</h3>
      <div className="faq">
        <dl className='que'>
          <dt>挑戰：</dt>
          <dd>{challengeTxt}</dd>
        </dl>
        <dl className='ans'>
          <dt>解法：</dt>
          <dd>{answer}</dd>
        </dl>
      </div>
      {children}
    </>
  );
}
