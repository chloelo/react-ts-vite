import { SectionLayout } from '../SectionLayout';

const Ch02_Sec02 = () => {
  return (
    <>
      <SectionLayout chIdx={1} secIdx={1}>
        <ol>
          <li>當變數會牽涉到畫面渲染，就使用 useState Hook</li>
          <li>使用 hook 都是 use 開頭</li>
          <li>要使用 React 的 hook 記得都要 import</li>
          <li>
            useState 會回傳兩個值，第一個是變數值，第二個是函示，用來改變第一個參數的值，通常命名都是
            set 開頭
          </li>
          <li>
            一個 component 可以有多個 state，但都要宣告在 function 裡的最上方
          </li>
          <li>
            每個組件的 state 都是獨立的，如果要共用，把 state
            放到最接近的父層上用 props 傳遞 state
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch02_Sec02;
