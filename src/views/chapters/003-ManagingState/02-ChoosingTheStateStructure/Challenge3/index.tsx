import "./index.css";

import { useState } from "react";

import { initialLetters } from "./data";
import Letter from "./Letter";

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

  return (
    <>
      <h1>Challenge 3 of 4: Fix the disappearing selection </h1>
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
    </>
  );
}
