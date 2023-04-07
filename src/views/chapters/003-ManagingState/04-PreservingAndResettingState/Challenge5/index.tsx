import "./index.css";

import { useState } from "react";

import Contact from "./Contact";

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <h1>Challenge 5 of 5: Fix misplaced state in the list </h1>
      <p>key一定要綁定唯一值，不然list變換順序，資料狀態就錯了</p>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{" "}
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
    </>
  );
}

const contacts: DataContacts[] = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];
export type DataContacts = {
  id: number;
  name: string;
  email: string;
};
