import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import ContactList from './ContactList';
import EditContact from './EditContact';

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find((c) => c.id === selectedId);

  function handleSave(updatedData: DataContacts) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
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
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='peaceful-scott-zqgvom'
        solutionIFrameTitle='compassionate-neumann-qb1886'
      >
        <div className='challenge03-04-wrap-03'>
          <p>解法：在 EditContact 上加上key就可以依據不同名字渲染相對應資料</p>
          <p>
            此小節踩到的雷是 selectedContact 有可能會回傳undefined，要用ts的{' '}
            <code>Non-null Assertion Operator</code> 宣告，告訴 ts 值絕對不會是
            null or undefined
          </p>
          <ContactList
            contacts={contacts}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id)}
          />
          <hr />
          <EditContact
            key={selectedId}
            initialData={selectedContact!}
            onSave={handleSave}
          />
        </div>
      </ChallengeLayout>
    </>
  );
}

const initialContacts: DataContacts[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export type DataContacts = {
  id: number;
  name: string;
  email: string;
};
