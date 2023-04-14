// import "./index.css";

import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

type ChangeEventInputProps = React.ChangeEvent<HTMLInputElement>;
type InputProps = {
  label: string;
  text: string;
  handleChange: (e: ChangeEventInputProps) => void;
};

export default function SyncedInputs() {
  const [text, setText] = useState('');
  function handleChange(e: ChangeEventInputProps) {
    setText(e.target.value);
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
        secIdx={2}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='broken-resonance-8l9nwq'
        solutionIFrameTitle='busy-taussig-4bofbg'
      >
        <div className='challenge03-03-wrap'>
          <Input label='First input' text={text} handleChange={handleChange} />
          <Input label='Second input' text={text} handleChange={handleChange} />
        </div>
      </ChallengeLayout>
    </>
  );
}

function Input({ label, text, handleChange }: InputProps) {
  // const [text, setText] = useState('');

  // function handleChange(e) {
  //   // setText(e.target.value);
  // }

  return (
    <>
      <label>
        {label} <input value={text} onChange={handleChange} />
      </label>
    </>
  );
}
