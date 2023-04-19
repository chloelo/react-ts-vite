import ChallengeIFrame from '../../chapters/ChallengeIFrame';
import { SectionLayout } from '../SectionLayout';

const Ch03_Sec06 = () => {
  return (
    <>
      <SectionLayout chIdx={2} secIdx={5}>
        <p>如何使用 context，依據以下三步驟 </p>
        <ol>
          <li>
            建立一個 context
            <br />
            <code>{`import { createContext } from 'react'`}</code> <br />
            <p>命名是自定義：</p>
            <code>{`export const LevelContext = createContext(1)`}</code>
          </li>
          <li>
            在需要使用 context 的 component 裡呼叫 useContext 這個 Hook
            <br />
            帶入的參數就是剛剛第一步驟定義好的 context <br />
            <code>{`import { useContext } from 'react';`}</code> <br />
            <code>{`const level = useContext(LevelContext);`}</code>
          </li>
          <li>
            找到相對應的父層，定義他為提供者(provider)，提供context的component
            <br />
            <h4>範例如下：</h4>
            <ChallengeIFrame title='vibrant-worker-pthbl3' />
          </li>
          <li>
          CSS，不同屬性彼此不會互相覆蓋，父層有 color red ，子層有背景色黑，並不會衝突，context 概念與 CSS 相似，子層會繼承父層提供的context，但不會被覆蓋自己原有的，每一個component 都可以作為provider或是接收多個context
          </li>
          <li>context 看似誘人，但容易不小心過度使用，如果傳遞props和 children就能實現，就先不要用context 吧</li>
        </ol>
        <p>哪些情境下比較適合用context</p>
        <ol>
          <li>全站主題：切換黑色系/白色系，要讓每個component都能得到一樣的context</li>
          <li>現在的登入帳號是誰</li>
          <li>路由</li>
          <li>管理狀態 (類似 env 的開關，設定打開關閉可以使哪些功能顯現/隱藏)</li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch03_Sec06;
