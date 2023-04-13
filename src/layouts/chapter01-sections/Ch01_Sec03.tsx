import { SectionLayout } from '../SectionLayout';

const Ch01_Sec03 = () => {
  return (
    <>
      <SectionLayout chIdx={0} secIdx={2}>
        <ol>
          <li>
            JSX 只能 return 單一根元素，如果不想有多餘的標籤可以使用
            fragment，可以寫成
            <code>{'<> </>'}</code>
          </li>
          <li>JSX 有錯誤時通常依循錯誤提示可以知道除錯方向</li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch01_Sec03;
