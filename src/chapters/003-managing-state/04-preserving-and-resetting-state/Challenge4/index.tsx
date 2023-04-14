import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  const challenge = (
    <>
      <p>說明待完成，之後補上</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={3}
        challengeIdx={3}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='objective-nash-ixhbm5'
        solutionIFrameTitle='ecstatic-rumple-ivxpmr'
      >
        <div>
          <p>在img tag加上key，切換next button時才會同時換圖片</p>
          <button onClick={handleClick}>Next</button>
          <h3>
            Image {index + 1} of {images.length}
          </h3>
          <img className='w-[150px] h-[150px]' key={image.src} src={image.src} />
          <p>{image.place}</p>
        </div>
      </ChallengeLayout>
    </>
  );
}

let images = [
  {
    place: 'Penang, Malaysia',
    src: 'https://i.imgur.com/FJeJR8M.jpg',
  },
  {
    place: 'Lisbon, Portugal',
    src: 'https://i.imgur.com/dB2LRbj.jpg',
  },
  {
    place: 'Bilbao, Spain',
    src: 'https://i.imgur.com/z08o2TS.jpg',
  },
  {
    place: 'Valparaíso, Chile',
    src: 'https://i.imgur.com/Y3utgTi.jpg',
  },
  {
    place: 'Schwyz, Switzerland',
    src: 'https://i.imgur.com/JBbMpWY.jpg',
  },
  {
    place: 'Prague, Czechia',
    src: 'https://i.imgur.com/QwUKKmF.jpg',
  },
  {
    place: 'Ljubljana, Slovenia',
    src: 'https://i.imgur.com/3aIiwfm.jpg',
  },
];
