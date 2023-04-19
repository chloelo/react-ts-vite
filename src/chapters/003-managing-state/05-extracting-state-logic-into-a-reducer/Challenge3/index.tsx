import { useReducer } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import Chat from './Chat';
import ContactList from './ContactList';
import {
  initialState,
  messengerReducer,
} from './messengerReducer';

export default function App() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  type messagesKey = keyof typeof initialState.messages; // 指定物件裡的 key
  const message = state.messages[state.selectedId as messagesKey];
  const contact = contacts.find((c) => c.id === state.selectedId);
  const challenge = (
    <>
      <p>
        請將現在範例調整成切換收信者時，訊息的 input
        不要清空，保留前一次輸入的文字內容
      </p>
    </>
  );
  const ans = (
    <>
      <ul>
        <li>
          首先 states 的結構要改變，不同人的訊息在發送之前都要保留
          <br />
          <code>{`{
            selectedId: 0,
            messages: {
                0: 'Hello, Taylor',
                1: 'Hello, Alice', 
                2: 'Hello, Bob'
              },
            }
          `}</code>
        </li>
        <li>
          ts 宣告時有噴錯，可以查看此篇{' '}
          <a
            href='https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression'
            target='_blank'
          >
            Element implicitly has an 'any' type because expression of type
            'string' can't be used to index type
          </a>
        </li>
        <li>
          將 state 裡 messages 的 key 取出，告訴 ts 只有這些元素可以當作
          messages 的 key
          <br />
          <code>{`
          type messagesKey = keyof typeof initialState.messages; // 指定物件裡的 key
          `}</code>
          <br />
          <code>{`
          const message = state.messages[state.selectedId as messagesKey];
          `}</code>
        </li>
      </ul>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={4}
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='youthful-shockley-k7yl8v'
        solutionIFrameTitle='hungry-bohr-emzq56'
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
