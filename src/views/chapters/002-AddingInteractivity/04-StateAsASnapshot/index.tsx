import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(
      walk
        ? `Stop is next, now walk: ${walk}`
        : `Walk is next, now walk: ${walk}`
    );
  }

  return (
    <>
      <h1>Challenge 1 of 1: Implement a traffic light </h1>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
