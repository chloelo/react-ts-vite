type ItemProps = {
  name: string;
  isPacked: boolean;
};

function Item({ name, isPacked }: ItemProps) {
  return (
    <li className="item">
      {/* {name} {isPacked && '✔'} */}
      {name} {isPacked ? "✔" : "❌"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Challenge 1 of 3: Show an icon for incomplete items with ? :</h1>
      <h2>Sally Ride's Packing List</h2>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
