import { useReducer } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import Chat from './Chat';
import ContactList from './ContactList';
import {
  initialState,
  messengerReducer,
} from './messengerReducer';

export default function App() {
  const [state, dispatch]= useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  const challenge = (
    <>
      <p>在 ContactList 和 Chat 兩個檔案加上 dispatch</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={4}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='stoic-golick-x0vpod'
        solutionIFrameTitle='vibrant-rhodes-gkinsn'
      >
        <>
          <div className='challenge03-05-wrap'>
            <ContactList
              contacts={contacts}
              selectedId={state.selectedId}
              dispatch={dispatch}
            />
            <Chat
              key={contact?.id}
              message={message}
              contact={contact!}
              dispatch={dispatch}
            />
          </div>
        </>
      </ChallengeLayout>
    </>
  );
}
const contacts: ContactType[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
export type ContactType = {
  id: number;
  name: string;
  email: string;
};
