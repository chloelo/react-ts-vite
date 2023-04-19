import ChallengeLayout from '../../../ChallengeLayout';
import Chat from './Chat';
import ContactList from './ContactList';
import {
  initialState,
  messengerReducer,
} from './messengerReducer';
// import { useReducer } from 'react';
import { useReducer } from './MyReact';

export default function App() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  type messagesKey = keyof typeof initialState.messages; // 指定物件裡的 key
  const message = state.messages[state.selectedId as messagesKey];
  const contact = contacts.find((c) => c.id === state.selectedId);
  const challenge = (
    <>
      <p>
        前幾個挑戰題都是直接使用 React 提供的 Hook- useReducer，試著自己寫出
        useReducer 的 Hook！
      </p>
    </>
  );
  const ans = (
    <>
      <ul>
        <li>dispatch 函式會帶入一個物件參數- action，將目前的 state 和要更新的 action 帶入自定義的 reducer，會取得更新的 state，然後再用 setState 更新渲染到畫面
          <br />
          <code>{`const nextState = reducer(state, action)`}</code> <br />
          <code>{`setState(nextState)`}</code>
        </li>
        <li>
          官網提供第二種寫法 <br />
          <code>{`setState((s) => reducer(s, action));`}</code>
        </li>
      </ul>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={4}
        challengeIdx={3}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='strange-tess-e9dbk6'
        solutionIFrameTitle='frosty-snow-y512l0'
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
