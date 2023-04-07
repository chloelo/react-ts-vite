import "./index.css";

import { useState } from "react";

function Message({ msgColor }: { msgColor: string }) {
  const [color, setColor] = useState(msgColor);
  const propColor = msgColor;
  return (
    <>
      <h2>內部 Message component</h2>
      <button onClick={() => setColor("yellow")}>
        內部按鈕 setColor to yellow
      </button>
      <p>從外部傳入 Message color props：{msgColor}</p>
      <p>內部的state color: {color}</p>
      <p>將props 另外用變數存起來 propColor：{propColor}</p>
    </>
  );
}

export default function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>外部 color： {color}</h1>
      <button onClick={() => setColor("blue")}>
        外部按鈕 setColor to Blue
      </button>
      <hr />
      <Message msgColor={color} />
    </>
  );
}
