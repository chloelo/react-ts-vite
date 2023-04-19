import {
  useContext,
  useState,
} from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import { ImageSizeContext } from './Context';
import {
  places,
  PlaceType,
} from './data';
import { getImageUrl } from './utils';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  const challenge = (
    <>
      <p>
        目前 props 是多層往下傳，傳遞 <code>imageSize</code> 到{' '}
        <code>List</code>，再傳到 <code>Place</code>，再傳到{' '}
        <code>PlaceImage</code>，請用 context 改寫，移除所有{' '}
        <code>imageSize</code> prop
      </p>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>先建立 context 檔案</li>
        <li>
          在最內層的 component <code>PlaceImage</code> 使用context
        </li>
        <li>找出要提供此 context 的外層，加入 provider</li>
      </ol>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={5}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='great-architecture-yykn5n'
        solutionIFrameTitle='misty-dawn-c01wt4'
      >
        <>
          <ImageSizeContext.Provider value={imageSize}>
            <div className='challenge03-06-wrap'>
              <label>
                <input
                  type='checkbox'
                  checked={isLarge}
                  onChange={(e) => {
                    setIsLarge(e.target.checked);
                  }}
                />
                Use large images
              </label>
              <hr />
              {/* <List imageSize={imageSize} /> */}
              <List />
            </div>
          </ImageSizeContext.Provider>
        </>
      </ChallengeLayout>
    </>
  );
}
function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      {/* <Place place={place} imageSize={imageSize} /> */}
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }: { place: PlaceType }) {
  return (
    <>
      {/* <PlaceImage place={place} imageSize={imageSize} /> */}
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }: { place: PlaceType }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place.imageId)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
