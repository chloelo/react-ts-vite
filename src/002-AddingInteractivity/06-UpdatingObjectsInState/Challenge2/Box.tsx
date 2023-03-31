import { useState } from 'react';
import { PointerEventDivProps, ReactElement } from '../../../Types'
import { BackgroundProps } from './Background'

type BoxProps = {
  children: ReactElement;
  color: string;
  position: BackgroundProps;
  onMove: (dx: number, dy: number) => void;
}

export default function Box({
  children,
  color,
  position,
  onMove
}: BoxProps) {
  const [
    lastCoordinates,
    setLastCoordinates
  ] = useState<BackgroundProps | null>(null);
  function handlePointerDown(e: PointerEventDivProps) {
    // e.target.setPointerCapture(e.pointerId);
    // e.currentTarget.setPointerCapture(e.pointerId);
    (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e: PointerEventDivProps) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e: PointerEventDivProps) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
  );
}
