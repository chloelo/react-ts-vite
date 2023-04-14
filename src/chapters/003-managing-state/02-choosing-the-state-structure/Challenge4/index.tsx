// import "./index.css";

import { useState } from 'react';

import ChallengeIFrame from '../../../ChallengeIFrame';
import ChallengeLayout from '../../../ChallengeLayout';
import { letters } from './data';
import Letter from './Letter';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId: number) {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
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
        secIdx={1}
        challengeIdx={3}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='nervous-jepsen-jcmdkz'
        solutionIFrameTitle='vigorous-dawn-p7pkfx'
      >
        <div className="challenge03-02-wrap-04">
          <p>
            解法二：hold a{' '}
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set'
              target='_blank'
            >
              {' '}
              <code>Set</code>
            </a>{' '}
            in state instead, which provides a fast{' '}
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has'
              target='_blank'
            >
              {' '}
              <code>has()</code>
            </a>
            operation
          </p>
          <hr />
          <h2>Inbox</h2>
          <ul>
            {letters.map((letter) => (
              <Letter
                key={letter.id}
                letter={letter}
                isSelected={selectedIds.has(letter.id)}
                onToggle={handleToggle}
              />
            ))}
            <hr />
            <p>
              <b>You selected {selectedCount} letters</b>
            </p>
          </ul>
        </div>
      </ChallengeLayout>
      <p>官網提供的另一種解法：<code>has()</code></p>
      <ChallengeIFrame title='eloquent-kowalevski-fywwhg' />
    </>
  );
}
