import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type='checkbox'
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  let view = (
    <>
      <Field key='LastName' label='Last name' />
      <Field key='FirstName' label='First name' />
      {checkbox}
    </>
  );
  if (reverse) {
    view = (
      <>
        <Field key='FirstName' label='First name' />
        <Field key='LastName' label='Last name' />
        {checkbox}
      </>
    );
  }
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
        secIdx={3}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='dark-breeze-xkrb8o'
        solutionIFrameTitle='zen-cherry-uh98wv'
      >
        <div className='challenge03-04-wrap'>{view}</div>
      </ChallengeLayout>
    </>
  );
  // if (reverse) {
  //   return (
  //     <>
  //       {title}
  //       <Field key="LastName" label="Last name" />
  //       <Field key="FirstName" label="First name" />
  //       {checkbox}
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       {title}
  //       <Field key="FirstName" label="First name" />
  //       <Field key="LastName" label="Last name" />
  //       {checkbox}
  //     </>
  //   );
  // }
}

function Field({ label }: { label: string }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type='text'
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
