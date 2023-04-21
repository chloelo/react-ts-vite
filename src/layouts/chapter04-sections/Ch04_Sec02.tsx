import ChallengeIFrame from '../../chapters/ChallengeIFrame';
import { SectionLayout } from '../SectionLayout';

const Ch04_Sec02 = () => {
  return (
    <>
      <SectionLayout chIdx={3} secIdx={1}>
        <h4>JS Map 物件基本使用</h4>
        <ol>
          <li>
            宣告一個新 Map 物件：<code>{`const map1 = new Map()`}</code>
          </li>
          <li>
            新增 key, value 用 set，<code>{`map1.set('a', 1)`}</code>
          </li>
          <li>
            取得用 get(key 值)，<code>{`map1.get('a')`}</code>
          </li>
          <li>
            刪除用 delete(key 值)，<code>{`map1.delete('a')`}</code>
          </li>
          <li>
            取得長度用 size，<code>{`map1.size`}</code>
          </li>
        </ol>
        <ol>
          <li>
            大部分時候都不需要操控到 DOM，但有些外部 API，像是瀏覽器的 video,
            scroll …，可能就會需要操作到
          </li>
          <li>
            如果 ref 是一組資料 (多個 DOM node)，可以傳遞 callback 給 ref{' '}
          </li>
          <li>
            <h4>官網提供 ref list 搭配 Map () 使用範例：</h4>
            <p>
              主要遇到的問題點：useRef 如果是 list，搭配 es6 Map 物件要怎麼宣告
              type
            </p>
            <p>
              <b>將預設值設定成 new Map 即可</b>
              <br />
              <code>{`const itemsRef = useRef<Map<number, HTMLLIElement>>(new Map());`}</code>
            </p>
            <ChallengeIFrame title='bold-taussig-1dwe75' />
          </li>
          <li>
            <p>
              想要取得其他組件裡的 DOM？可以用 <code>forwardRef()</code>{' '}
              這個方法，一般設計系統，低階組件比較常用 forwardRef，像是 input,
              button，讓父層(外面的組件)可以調用
            </p>
            <ChallengeIFrame title='dazzling-hill-u5odpc' />
          </li>
          <li>
            <p>
              將自己的 DOM 節點分享給其他組件有風險，外層可以輕易的使用 JS
              對子層做很多操作，React 有提供方法，讓我們可以只暴露特定的 API
              給外層使用，而不是所有功能都能使用，方法是
              <code>useImperativeHandle</code>
            </p>
            <ChallengeIFrame title='dreamy-matsumoto-m7kflm' />
          </li>
          <li>
            <p>
            在 React 中，狀態更新是佇列的 (不會一個狀態 set 就全部都更新，等全部 set 狀態的 function 都跑完才檢查哪些需要更新)，但某些情況必須要同步更新 setState 與 DOM 呢？我們可以強制 React 同步更新 DOM，方法是 <code>flushSync</code>
            </p>
            <ChallengeIFrame title='amazing-meitner-21t7x2' />
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch04_Sec02;
