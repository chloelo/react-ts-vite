import "./index.css";

import { useState } from "react";

export default function App() {
  const [showHint, setShowHint] = useState(false);
  // if (showHint) {
  //   return (
  //     <div>
  //       <p><i>Hint: Your favorite city?</i></p>
  //       <Form />
  //       <button onClick={() => {
  //         setShowHint(false);
  //       }}>Hide hint</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <Form />
  //     <button onClick={() => {
  //       setShowHint(true);
  //     }}>Show hint</button>
  //   </div>
  // );
  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      <button
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        {showHint ? "Hide hint" : "Show hint"}
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");
  return (
    <>
      <h1>Challenge 1 of 5: Fix disappearing input text </h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}
