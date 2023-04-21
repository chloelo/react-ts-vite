import { SectionLayout } from '../SectionLayout';

const Ch04_Sec01 = () => {
  return (
    <>
      <SectionLayout chIdx={3} secIdx={0}>
        <ol>
          <li>
            首先解釋此章節開頭 Escape
            Hatches，直譯是擺脫困境的出路或是解決困難的辦法，所以放在這個章節裡的意思是，平常不會特別用到它，真的碰到問題的時候才會用它
          </li>
          <li>
            Refs 有兩種使用情境，一種是把 DOM 元素存在 ref
            裡，一種是自己想要控制的值也可以存在 ref 要使用 ref 就先把它 import
            進來 <br />
            <code>{`import { useRef } from 'react'`}</code>
          </li>
          <li>
            放入自己想要控制的值，放物件還是純值還是布林都可以 <br />
            <code>{`const ref = useRef(0);`}</code>
          </li>
          <li>
            react 會回傳給你一個物件，會帶一個key：current，值就是我們剛剛設定的
            0 <br />
            <code>{`{ current: 0 // The value you passed to useRef }`}</code>
          </li>
          <li>React 不會去幫你處理它，你要改變它就用一般 JS 去操控它(給你一個空間自己掌控)，所以你可以直接改變 (跟 React 操況的 state 不一樣，react 操控，我們就不能直接改變原值)，相對的，我們對這個 ref 做什麼改變，react 不會監聽不會知道，就不會去觸發 re-render</li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch04_Sec01;
