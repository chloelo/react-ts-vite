import { useState } from 'react';

import { ChangeEventInputProps } from '../../../../Types';
import ChallengeLayout from '../../../ChallengeLayout';

export default function Form() {
  // let firstName = '';
  // let lastName = '';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e: ChangeEventInputProps) {
    // firstName = e.target.value;
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: ChangeEventInputProps) {
    // lastName = e.target.value;
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
    // firstName = '';
    // lastName = '';
  }
  const challenge = (
    <p>
      畫面上兩個 input，輸入任何文字都沒有反應，請修復，並將 handleReset
      功能補齊
    </p>
  );
  const ans = (
    <ul>
      <li>
        將兩個　input　欄位都綁定　state，讓 React
        知道變數狀態更新時畫面也要渲染
      </li>
      <li>
        input 元素綁定的 event 通常都是 <code>onChange</code>
      </li>
    </ul>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={1}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='busy-banach-pbzpq8'
        solutionIFrameTitle='determined-lake-z9s5oc'
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder='First name'
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input
            placeholder='Last name'
            value={lastName}
            onChange={handleLastNameChange}
          />
          <h1>
            Hi, {firstName} {lastName}
          </h1>
          <button onClick={handleReset}>Reset</button>
        </form>
      </ChallengeLayout>

      {/* <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hi, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reset</button>
      </form> */}
    </>
  );
}
