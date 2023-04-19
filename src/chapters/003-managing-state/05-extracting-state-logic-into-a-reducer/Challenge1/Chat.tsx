import { ContactType } from './index';
import { ActionType } from './messengerReducer';

type ChatProps = {
  contact: ContactType;
  message: string;
  dispatch: React.Dispatch<ActionType>;
};
export default function Chat({ contact, message, dispatch }: ChatProps) {
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
      <button>Send to {contact.email}</button>
    </section>
  );
}
