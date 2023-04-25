import {
  useEffect,
  useState,
} from 'react';

import ChallengeLayout from '../../../ChallengeLayout';
import { fetchBio } from './api';

export function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result as string);
      }
    });
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value='Alice'>Alice</option>
        <option value='Bob'>Bob</option>
        <option value='Taylor'>Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </>
  );
}

export default function App() {
  const challenge = (
    <>
      <ul>
        <li>
          快速切換下拉選單，會發現回傳的文字跟選取的名字沒有匹配，請解決此問題
        </li>
        <li>官網提示：非同步處理的 effect 需要加上 cleanup function</li>
      </ul>
    </>
  );
  const ans = (
    <p>
      (要反覆練習) 當有非同步事件時，必須要先清除前一次的
      fetch，通常是設定一個變數 ignore。
      <br />
      每次 render 的副作用都有它自己的 ignore 變數，預設值是 false，當選擇了新的
      person，原 person 的 ignore 變成
      true，現在不管哪個請求先完成，只有最後一個 effect 的 ignore 被設定成
      false，就算前面fetch 資料抓回來，也不會去 setBio，不影響畫面
    </p>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={2}
        challengeIdx={3}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='charming-cray-1knckk'
        solutionIFrameTitle='determined-banach-stsj99'
      >
        <>
          <Page />
        </>
      </ChallengeLayout>
    </>
  );
}
