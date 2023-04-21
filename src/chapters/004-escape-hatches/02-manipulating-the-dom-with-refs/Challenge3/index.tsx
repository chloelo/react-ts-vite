import {
  useRef,
  useState,
} from 'react';

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
  const CatItemsRef = useRef(new Map<number, HTMLLIElement>());
  const [index, setIndex] = useState(0);
  console.log('first', index);
  function handleSCroll(itemId: number) {
    setIndex(itemId);
    const target = CatItemsRef.current.get(itemId);
    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
  function handleSCrollToNext() {
    console.log('sec', index);
    // flushSync(() => {
    //   if (index < catList.length - 1) {
    //     setIndex(index + 1);
    //   } else {
    //     setIndex(0);
    //   }
    // });
    
    let nextIndex = 0;
    if (index < catList.length - 1) {
      nextIndex = index + 1;
    }
    // index, setIndex 都是最後(跳出這個 scroll fu)才更新，我們要 scroll 到對的圖片就要先取得下一張的 index
    setIndex(nextIndex);
    console.log('third', index);
    const target = CatItemsRef.current.get(nextIndex);
    // const target = CatItemsRef.current.get(index);
    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    console.log('four', index);
  }
  return (
    <>
      <nav>
        index: {index} <br />
        <button onClick={handleSCrollToNext}>Next</button>
        {catList.map((cat, i) => (
          <button
            onClick={() => {
              handleSCroll(cat.id);
            }}
          >
            前往第 {i + 1} 張
          </button>
        ))}
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={(node) => {
                if (node) {
                  CatItemsRef.current.set(cat.id, node);
                } else {
                  CatItemsRef.current.delete(cat.id);
                }
              }}
            >
              <img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
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
      </p>
    </>
  );
  const ans = (
    <>
      <p>拆開兩個檔案練習：single ref / ref list：</p>
      <ul>
        <li>
          單一 ref：官網建議，此範例不需要每個圖像都有一個 ref,當下 active的
          圖像綁定 ref 即可， 官網提示：記得使用 <code>flushSync</code> 確保
          scroll 之前你的 DOM 有被及時更新
        </li>
        <li>
          <p>
          ref list：自己練習多個 ref 的撰寫方式 <br />
          這個範例不需使用 flushSync，因為 DOM 不需要更新，一開始就綁定好全部數量
          </p>
          <p>此題踩雷：states 都是最後更新，click 的 event handler 裡取到的 state: index，在function 執行完後才會更新，但我們要在這個 click 函式裡取得下一張圖片的 index，要 get 的目標就不是 index，而是 next index (自訂變數) <br />
          <code>{`CatItemsRef.current.get(nextIndex)`}</code>
          </p>
        </li>
      </ul>
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
