import { useState } from 'react';
import { useImmer } from 'use-immer';
import { ChangeEventSelectProps } from '../../../Types'
import Background from './Background';
import Box from './Box';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  // const [shape, setShape] = useState({
  //   color: 'orange',
  //   position: initialPosition
  // });

  // 改成immer寫法：
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });
  function handleMove(dx: number, dy: number) {
    // setShape({
    //   ...shape,
    //   position: {
    //     x: shape.position.x + dx,
    //     y: shape.position.y + dy,
    //   }
    // });
    updateShape(draft => {
      draft.position.x += dx;
      draft.position.y += dy;
    })
  }

  function handleColorChange(e: ChangeEventSelectProps) {
    updateShape(draft => {
      draft.color = e.target.value

    })
    // setShape({
    //   ...shape,
    //   color: e.target.value
    // });
  }

  return (
    <>
      <h1>Challenge 3 of 3: Update an object with Immer  </h1>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        <>Drag me!</>
      </Box>
    </>
  );
}
