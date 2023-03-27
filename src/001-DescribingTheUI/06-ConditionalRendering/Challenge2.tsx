
type ItemProps = {
  name: string;
  importance: number;
}

function Item({ name, importance }: ItemProps) {
  return (
    <li className="item">
      {name}{importance >0 && <i> (Importance: {importance})”</i>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Challenge 2 of 3: Show the item importance with && </h1>
      <h2>Sally Ride's Packing List</h2>
      <ul>
        <Item
          importance={9}
          name="Space suit"
        />
        <Item
          importance={0}
          name="Helmet with a golden leaf"
        />
        <Item
          importance={6}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
