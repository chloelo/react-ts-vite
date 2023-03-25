import { Fragment } from 'react'
import './index.css'
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      <h1>Challenge 4 of 4: List with a separator </h1>
      {poem.lines.map((line, index) =>
        <Fragment key={index}>
          <p >
            {line}
          </p>
          {index < 2 && <hr />}
        </Fragment>
      )}


    </article>
  );
}
