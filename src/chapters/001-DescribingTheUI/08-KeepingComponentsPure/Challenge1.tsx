import "./index.css";

import { useEffect, useState } from "react";

import Clock from "./Clock.js";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  return (
    <>
      <h1>Challenge 1 of 3: Fix a broken clock</h1>
      <Clock time={time} />
    </>
  );
}
