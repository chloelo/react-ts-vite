import { SectionLayout } from '../SectionLayout';

const Ch01_Sec01 = () => {
  return (
    <>
      <SectionLayout chIdx={0} secIdx={0}>
        <ol>
          <li>定義元件開頭大寫，小寫的標籤就會被 React 認作是 Html 原生標籤</li>
          <li>標籤要有結尾</li>
          <li>最外層只能有一個標籤</li>
          <li>不要定義 Function component 裡又定義別的 Function component</li>
          <li>return 後面不能直接換行，保險起見加上小括號</li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch01_Sec01;
