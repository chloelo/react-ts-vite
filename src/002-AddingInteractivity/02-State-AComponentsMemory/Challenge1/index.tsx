import { useState } from 'react';
import { sculptureList } from './data';
import './index.css'

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
  return (
    <>
      <h1>Challenge 1 of 4: Complete the gallery </h1>
      <ul>
        <li>Next 按鈕按到最後一個之後會crush，修復這個問題</li>
        <li>新增 Previous Button</li>
      </ul>
      <button onClick={handlePreviousClick} disabled={index === 0}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={sculptureList.length === (index + 1)}>
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
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
