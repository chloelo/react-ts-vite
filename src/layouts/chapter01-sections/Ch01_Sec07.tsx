import { SectionLayout } from '../SectionLayout';

const Ch01_Sec07 = () => {
  return (
    <>
      <SectionLayout chIdx={0} secIdx={6}>
        <ol>
          <li>渲染列表都是用 map 和 filter 這兩個 function 來處理</li>
          <li>
            箭頭函式如果沒有加上大括號，語法裡有隱藏的
            return，不用另外寫，但如果加上大括號就要寫return
          </li>
          <li>
            跑回圈一定要在 array item 加上 key 屬性，讓 React
            知道操控的對象是誰，不要用 index 當作 key，也不要每次隨機產生
            key，確保 key 是獨一無二的
          </li>
          <li>
            不想增加多餘沒用到的 HTML 標籤，可以引入 react Fragment，綁定 key
            <p>
              <code>{`{poem.lines.map((line, i) =><Fragment key={line.id}>`}</code>
            </p>
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};

export default Ch01_Sec07;
