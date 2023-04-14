// import "./index.css";

import { useState } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export default function Picture() {
  const [bgActive, setBgActive] = useState(true);
  const clickBgHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setBgActive(true);
  };
  const clickImgHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setBgActive(false);
  };
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
        secIdx={0}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='priceless-butterfly-urj9mh'
        solutionIFrameTitle='lingering-wave-zezp51'
      >
        <div className='challenge03-01-wrap'>
          <div
            className={`background ${bgActive ? 'background--active' : ''}`}
            onClick={(e) => clickBgHandler(e)}
          >
            <img
              className={`picture ${bgActive ? '' : 'picture--active'}`}
              alt='Rainbow houses in Kampung Pelangi, Indonesia'
              src='https://i.imgur.com/5qwVYb1.jpeg'
              onClick={(e) => clickImgHandler(e)}
            />
          </div>
        </div>
      </ChallengeLayout>
    </>
  );
}
