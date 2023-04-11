import { Fragment } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
  ],
};

export default function Poem() {
  const challenge = (
    <>
      <ol>
        <li>
          現有一組資料是三句段落，請讓畫面呈現段落之間有分隔線，分隔線不能出現在第一個段落前面和最後一個段落後面
        </li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          {' '}
          可以用迴圈的 index 來判斷，
          <p>
            {' '}
            第一種邏輯：
            <br />
            當index小於2，p 段落後面就加分隔線{' '}
            <code>{`{index < 2 && <hr />}`}</code>
          </p>
          <p>
            {' '}
            第二種邏輯：
            <br />
            當index 大於0，p 段落前面就加分隔線{' '}
            <code>{`{index > 0 && <hr />}`}</code>
          </p>
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={6}
      challengeIdx={3}
      challengeTxt={challenge}
      answer={ans}
    >
      <article>
        {poem.lines.map((line, index) => (
          <Fragment key={index}>
            <p>{line}</p>
            {index < 2 && <hr />}
          </Fragment>
        ))}
      </article>
    </ChallengeLayout>
  );
}
