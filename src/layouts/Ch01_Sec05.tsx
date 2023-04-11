import {
  useEffect,
  useState,
} from 'react';

import { SectionLayout } from './SectionLayout';

type ClockProps = {
  color: string;
  time: string;
};
function Clock({ color, time }: ClockProps) {
  return <h1 style={{ color: color }}>{time}</h1>;
}
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
function Example01() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value='lightcoral'>lightcoral</option>
          <option value='midnightblue'>midnightblue</option>
          <option value='rebeccapurple'>rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
const Ch01_Sec05 = () => {
  return (
    <>
      <SectionLayout chIdx={0} secIdx={4}>
        <ol>
          <li>傳遞 props 就跟 HTML 標籤加上屬性一樣</li>
          <li>
            可以用解構的方式傳遞所有 props，像這樣：
            <code>{'<Avatar {...props}/>'}</code>，但不建議過度使用
          </li>
          <li>Props 是唯讀，不能改變它的值，改變值要透過 Hook useState</li>
          <li>
            JSX可以巢狀包覆 Component，React 有個內建 props{' '}
            <code>children</code> 可以用
            <p>
              以 <code>{'<Card><Avatar /></Card>'}</code>結構為例，Card
              組件預設就會有 children 這個 prop 給 Avatar 組件使用，
              <br />
              想像在 Card 組件挖一個洞 (空間) 給其他子組件，只要在 Card 組件 JSX
              結構裡加上 <code> {'{children}'}</code>
              ，其他子組件就會在這個位置裡呈現
            </p>
            <div>
              <img
                src='https://react.dev/images/docs/illustrations/i_children-prop.png'
                alt=''
              />
            </div>
          </li>
        </ol>
        <h4>章節範例 1：</h4>
        <p>
          說明：範例組件裡面再包一個 Clock 組件，將時間以及下拉選單選的顏色作為
          props 傳入 Clock 組件呈現
        </p>
        <hr />
        <Example01 />
      </SectionLayout>
    </>
  );
};

export default Ch01_Sec05;
