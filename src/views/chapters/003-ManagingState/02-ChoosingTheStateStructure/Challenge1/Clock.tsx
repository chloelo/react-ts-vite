import { useState } from "react";

type ClockProps = {
  color: string;
  time: string;
};
export default function Clock({ color, time }: ClockProps) {
  // const [color, setColor] = useState(props.color);
  return <h1 style={{ color: color }}>{time}</h1>;
}
