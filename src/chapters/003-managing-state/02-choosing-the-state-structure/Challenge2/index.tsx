// import "./index.css";

import { useState } from 'react';

import AddItem from './AddItem';
import PackingList from './PackingList';

let nextId = 3;
const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

type IdProps = number;
type TitleProps = string;
type PackedProps = boolean;

export type ItemProps = {
  id: IdProps;
  title: TitleProps;
  packed: PackedProps;
};
export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  // const [total, setTotal] = useState(3);
  // const [packed, setPacked] = useState(1);
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;

  function handleAddItem(title: TitleProps) {
    // setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem: ItemProps) {
    // if (nextItem.packed) {
    //   setPacked(packed + 1);
    // } else {
    //   setPacked(packed - 1);
    // }
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId: IdProps) {
    // setTotal(total - 1);
    // const targetItem = items.find(item => item.id === itemId)
    // if(targetItem?.packed){
    //   setPacked(packed - 1);
    // }
    setItems(items.filter((item) => item.id !== itemId));
    // setPacked(packed - 1);
  }

  return (
    <>
      <h1>Challenge 2 of 4: Fix a broken packing list </h1>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
}
