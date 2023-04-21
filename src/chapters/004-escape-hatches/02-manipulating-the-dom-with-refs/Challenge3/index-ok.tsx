import {
  useRef,
  useState,
} from 'react';
import { flushSync } from 'react-dom';

import ChallengeLayout from '../../../ChallengeLayout';

type CatItem = {
  id: number;
  imageUrl: string;
};
const catList: CatItem[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}

export function CatFriends() {
  const selectedRef = useRef<HTMLLIElement>(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <nav>
        <button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            });
            console.log('index in click : ', index);
            console.log('target: ', selectedRef.current);
            selectedRef.current!.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index === i ? selectedRef : null}>
              <img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
              index: {index}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function App() {
  const challenge = (
    <>
      <p>
        點擊 Next 按鈕，active　的圖片要可以滾動到視窗中間，你需要呼叫{' '}
        <code>scrollIntoView()</code> 讓 DOM 滾動
        <br />
        官網提示：記得使用 <code>flushSync</code> 確保 scroll 之前你的 DOM
        有被及時更新
      </p>
    </>
  );
  const ans = (
    <>
      <p>ref 要用 callback 的方式</p>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={1}
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='happy-smoke-nublxc'
        solutionIFrameTitle='xenodochial-kapitsa-ddffoy'
      >
        <>
          <div className='challenge04-02-wrap'>
            <CatFriends />
          </div>
        </>
      </ChallengeLayout>
    </>
  );
}
