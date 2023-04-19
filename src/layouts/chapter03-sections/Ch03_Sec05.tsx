import { SectionLayout } from '../SectionLayout';

const Ch03_Sec05 = () => {
  return (
    <>
      <SectionLayout chIdx={2} secIdx={4}>
        
        <h4>透過以下三步驟從 useState 轉移到 useReducer</h4>
        <ol>
          <li>event handler 綁定 dispatch actions，發送任務給 reducer 處理</li>
          <li>寫一個自定義的 reducer 函式</li>
          <li>在 component 裡使用 hook - useReducer</li>
        </ol>
        <h4>比較 useState 與 useRecuder：</h4>
        <ol>
          <li>
            程式碼大小：一開始會覺得 useState 寫的 code 比較少，但狀態變多時，用
            useReducer 可以不用寫太多次重複的 code
          </li>
          <li>
            可讀性：當狀態變多時，用 useReducer 比較清楚知道狀態更新的邏輯脈絡
          </li>
          <li>
            除錯：用useState不好除錯，要一個一個去找，看哪個state可能出錯了，reducer
            把邏輯歸類，可以直接在function裡console除錯
          </li>
          <li>
            測試：reducer 是 pure function，不像 state 只存在於各自的 component
            裡，可以把reducer 出，分開測試
          </li>
          <li>
            個人偏好：沒有一定要哪一種寫法，兩種寫法都可以，他們最終的呈現結果是一樣
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch03_Sec05;
