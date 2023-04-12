import { useState } from 'react';

import { ChildrenProps } from '../../../../Types';

export default function Panel({ children }: ChildrenProps) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </section>
  );
}
