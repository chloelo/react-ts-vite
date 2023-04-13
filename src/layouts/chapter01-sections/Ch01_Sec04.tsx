import { SectionLayout } from '../SectionLayout';

const Ch01_Sec04 = () => {
  return (
    <>
      <SectionLayout chIdx={0} secIdx={3}>
        <ol>
          <li>在JSX裡單引號或雙引號傳遞的是字串</li>
          <li>花括號裡面可以帶入 js 邏輯和變數</li>
          <li>
            花括號放在屬性裡要用<code>{'='}</code>等號接，放在標籤內可以直接用
          </li>
          <li>看到兩層花括號不是特殊語法，只是 JSX 花括號裡放了物件</li>
        </ol>
      </SectionLayout>
    </>
  );
};

export default Ch01_Sec04;
