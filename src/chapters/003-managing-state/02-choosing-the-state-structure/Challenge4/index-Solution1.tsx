// import "./index.css";

import { useState } from 'react';

import { letters } from './data';
import Letter from './Letter';

export default function MailClient() {
  // const [selectedId, setSelectedId] = useState(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  // TODO: allow multiple selection
  // const selectedCount = 1;
  const selectedCount = selectedIds.length;
  function handleToggle(toggledId: number) {
    // TODO: allow multiple selection
    // setSelectedId(toggledId);
    if (selectedIds.includes(toggledId)) {
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h1>Challenge 4 of 4: Implement multiple selection</h1>
      <p>
        解法一：用include去找選到的id有沒有在ids
        array裡面，如果有就filter掉，沒有就新增上去
      </p>
      <p>
        但解法一有缺點，如果陣列長度很長，每切換一個checkbox就要跑一次include去檢查，耗效能
      </p>
      <hr />
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              // letter.id === selectedId
              selectedIds.includes(letter.id)
            }
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
