import { ContactType } from './index';
import { ActionType } from './messengerReducer';

type ChatProps = {
  contact: ContactType;
  message: string;
  dispatch: React.Dispatch<ActionType>;
};
export default function Chat({ contact, message, dispatch }: ChatProps) {

  function handleClick(){
    alert(`傳送訊息： ${message} 給 ${contact.email}`)
    dispatch({
      type: 'sent_message',
    });
  }
  return (
    <section className='chat'>
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={handleClick}>Send to {contact.email}</button>
    </section>
  );
}
