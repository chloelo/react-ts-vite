import { useState } from 'react';

import { ChangeEventInputProps } from '../../../../Types';
import ChallengeLayout from '../../../ChallengeLayout';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });
  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e: ChangeEventInputProps) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: ChangeEventInputProps) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }
  // function handlePlusClick() {
  //   player.score++;
  // }

  // function handleFirstNameChange(e: ChangeEventInputProps) {
  //   setPlayer({
  //     ...player,
  //     firstName: e.target.value,
  //   });
  // }

  // function handleLastNameChange(e: ChangeEventInputProps) {
  //   setPlayer({
  //     lastName: e.target.value
  //   });
  // }
  const challenge = (
    <>
      <p>說明待完成，之後補上</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={5}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='lively-glitter-ov6xyb'
        solutionIFrameTitle='ecstatic-hypatia-uyi9xm'
      >
        <p>改變物件記得要淺層拷貝</p>
        <label>
          Score: <b>{player.score}</b>{' '}
          <button onClick={handlePlusClick}>+1</button>
        </label>
        <label>
          First name:
          <input value={player.firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last name:
          <input value={player.lastName} onChange={handleLastNameChange} />
        </label>
        <hr />
        <div>firstName: {player.firstName}</div>
        <div>lastName: {player.lastName}</div>
      </ChallengeLayout>
    </>
  );
}
