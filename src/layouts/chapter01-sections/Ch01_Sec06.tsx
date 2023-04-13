import { SectionLayout } from '../SectionLayout';

const Ch01_Sec06 = () => {
  return (
    <>
      <SectionLayout chIdx={0} secIdx={5}>
        <ol>
          <li>
            在 React 裡，可以透過 <code>if</code> 判斷或是三元運算子{' '}
            <code>? :</code> 或是 <code>&&</code> 三種方式給予條件，條件符合才
            render 到畫面
          </li>
          <li>
            In JSX,<code> {'cond ? <A /> : <B />'}</code>表示 “if cond, 渲染
            <code>{'<A />'}</code>, 不然渲染<code>{'<B />'}</code>”.
          </li>
          <li>
            In JSX,<code> {'cond && <A />'}</code>表示 “if cond, 渲染
            <code>{'<A />'}</code>, 不然什麼都不做”.
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};

export default Ch01_Sec06;
