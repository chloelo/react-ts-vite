import "./index.css";

import { useState } from "react";

import ContactList from "./ContactList";
import EditContact from "./EditContact";

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

  return (
    <div>
      <h1>Challenge 3 of 5: Reset a detail form </h1>
      <p>解法：在 EditContact 上加上key就可以依據不同名字渲染相對應資料</p>
      <p>
        此小節踩到的雷是 selectedContact 有可能會回傳undefined，要用ts的{" "}
        <code>Non-null Assertion Operator</code> 宣告，告訴 ts 值絕對不會是 null
        or undefined
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
  );
}

const initialContacts: DataContacts[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export type DataContacts = {
  id: number;
  name: string;
  email: string;
};
