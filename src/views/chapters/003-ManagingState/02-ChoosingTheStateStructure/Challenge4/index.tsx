import "./index.css";

import { useState } from "react";

import { letters } from "./data";
import Letter from "./Letter";

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

  return (
    <>
      <h1>Challenge 4 of 4: Implement multiple selection</h1>
      <p>
        解法二：hold a{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
          target="_blank"
        >
          {" "}
          <code>Set</code>
        </a>{" "}
        in state instead, which provides a fast{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has"
          target="_blank"
        >
          {" "}
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
    </>
  );
}
