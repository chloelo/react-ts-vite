import { ContactType } from './index';
import { ActionType } from './messengerReducer';

export type SetContactListAction = {
  type: string;
  contactId: number;
};

type ContactListProps = {
  contacts: ContactType[];
  selectedId: number;
  dispatch: React.Dispatch<ActionType>;
};

export default function ContactList({
  contacts,
  selectedId,
  dispatch,
}: ContactListProps) {
  return (
    <section className='contact-list'>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // TODO: dispatch changed_selection
                dispatch({
                  type: 'changed_selection',
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
