import { useReducer } from 'react';

import ChallengeIFrame from '../../../ChallengeIFrame';
import ChallengeLayout from '../../../ChallengeLayout';
import Chat from './Chat';
import ContactList from './ContactList';
import {
  initialState,
  messengerReducer,
} from './messengerReducer';

export default function App() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  const challenge = (
    <>
      <p>目前點選 Send 按鈕沒有發生任何事，增加一個 click 事件</p>
      <ul>
        <li>點擊後 alert 收件人的電子郵件和訊息</li>
        <li>清除 input 上的訊息</li>
      </ul>
    </>
  );
  const ans = (
    <>
      <ul>
        <li>
          第一種解法是直接在 send 按鈕 dispatch
          <code>
            {`{
              type: 'edited_message',
              message: '',
            }`}
          </code>
        </li>
        <li>
          第二種解法是站在使用者層面，reducer 新增一個 type
          <code>'sent_message</code>
          <br />
          <code>
            {`dispatch({
            type: 'sent_message'})`}
          </code>
        </li>
        <li>請記得，action type 是要充分敘述使用者會做什麼，而不是你想要狀態怎麼改變，alert也不要放進 reducer 裡，reducer 必須是 pure 的</li>
      </ul>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={4}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='vibrant-rhodes-gkinsn'
        solutionIFrameTitle='damp-water-589v8h'
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
      <p>官網提供的另一種解法：(比較建議)</p>
      <ChallengeIFrame title='youthful-shockley-k7yl8v' />
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
