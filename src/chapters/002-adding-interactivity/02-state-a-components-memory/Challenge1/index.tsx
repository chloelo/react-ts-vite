import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import { sculptureList } from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }
  function handlePreviousClick() {
    setIndex(index - 1);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  const challenge = (
    <ul>
      <li>點擊 Next 按鈕按到最後一個建築，畫面會 crush，修復這個問題</li>
      <li>修復第一個問題後，新增 Previous 按鈕，可以查看前一個建築，確保回到第一個建築時不會 crush</li>
    </ul>
  );
  const ans = (
    <ol>
      <li>在 Next 和 Previous 兩個按鈕上加上判斷，如果索引位置在第一個建築，那 Previous 按鈕就設定 disabled，如果索引位置在最後一個建築，Next 按鈕就 disabled。</li>
      <li>
        <code>{`disabled={index === 0}`}</code> <br />
        <code>{`disabled={sculptureList.length === index + 1}`}</code>
      </li>
    </ol>
    
  );
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={1}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='hopeful-curran-699sy3'
        solutionIFrameTitle='recursing-forest-fg0261'
      >
        <button onClick={handlePreviousClick} disabled={index === 0}>
          Previous
        </button>
        <button
          onClick={handleNextClick}
          disabled={sculptureList.length === index + 1}
        >
          Next
        </button>

        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} />
      </ChallengeLayout>
    </>
  );
}
