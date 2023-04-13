import { SectionLayout } from '../SectionLayout';

const Ch01_Sec08 = () => {
  return (
    <>
      <SectionLayout chIdx={0} secIdx={7}>
        <ol>
          <li>pure component 不會改動到外面的資料，輸入什麼就會返回相對應的 JSX，官網以食譜舉例，每次提供一樣的材料，就會拿到一樣的料理
            <p>
              <img src="https://react.dev/images/docs/illustrations/i_puritea-recipe.png" alt="" />
            </p>
          </li>
          <li>React 的 <code>React.StrictMode</code> 會去幫我們做檢查 (每個組件 render 時跑兩次，一次正常渲染，一次做檢查)，去查找有沒有預期外的 side effect，有些變數顯示非我們預期，那就是 React 在提醒你這個 component 有預期外的副作用</li>
          <li>不是說絕對不能有副作用，組件裡自定義的變數，不會影響到外部，預期內的 side effect 是可以的</li>
          <li>大部分 React side effects 都是放在 event handler，就是各種事件，React 是要求在 render JSX 時要是 pure component，event 事件都是在 render 之後的事，所以不用是 pure function 沒關係</li>
          <li>當 render function 都是 pure 時，放在哪裡都可以執行，不管前台後台，React 自身也有機制去判斷現在傳入的資料都一樣，那 output 就會一樣，不用重新渲染，節省效能</li>
          <li>有些副作用是一定會產生卻又不是放在 event handler 事件裡時，可以用 react 的 hook - useEffect 去執行</li>
          <li>不要更改 props，要改變狀態用 hook - useState</li>
        </ol>
      </SectionLayout>
    </>
  );
};

export default Ch01_Sec08;
