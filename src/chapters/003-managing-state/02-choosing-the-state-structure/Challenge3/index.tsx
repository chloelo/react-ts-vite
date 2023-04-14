// import "./index.css";

import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import { initialLetters } from './data';
import Letter from './Letter';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  // const [highlightedLetter, setHighlightedLetter] = useState<DataLetterType | null>(null);
  const [highlightedId, setHighlightedId] = useState<number | null>(null);
  function handleHover(letterId: number) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId: number) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starredId) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
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
        secIdx={1}
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='gifted-shadow-5bdb53'
        solutionIFrameTitle='romantic-johnson-zupoej'
      >
        <div className='challenge03-02-wrap'>
          <h2>Inbox</h2>
          <ul>
            {letters.map((letter) => (
              <Letter
                key={letter.id}
                letter={letter}
                isHighlighted={letter.id === highlightedId}
                onHover={handleHover}
                onToggleStar={handleStar}
              />
            ))}
          </ul>
        </div>
      </ChallengeLayout>
    </>
  );
}
