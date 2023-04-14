// import "./index.css";

import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import Contact from './Contact';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
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
        challengeIdx={4}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='upbeat-pasteur-6wbche'
        solutionIFrameTitle='exciting-clarke-nrytcz'
      >
        <div className=''>
          <p>key一定要綁定唯一值，不然list變換順序，資料狀態就錯了</p>
          <label>
            <input
              type='checkbox'
              checked={reverse}
              onChange={(e) => {
                setReverse(e.target.checked);
              }}
            />{' '}
            Show in reverse order
          </label>
          <ul>
            {displayedContacts.map((contact, i) => (
              // <li key={i}>
              <li key={contact.id}>
                <Contact contact={contact} />
              </li>
            ))}
          </ul>
        </div>
      </ChallengeLayout>
    </>
  );
}

const contacts: DataContacts[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' },
];
export type DataContacts = {
  id: number;
  name: string;
  email: string;
};
