import ChallengeIFrame from '../../chapters/ChallengeIFrame';
import { SectionLayout } from '../SectionLayout';

const Ch02_Sec03 = () => {
  return (
    <>
      <SectionLayout chIdx={1} secIdx={2}>
        <ol>
          <li>
            React 在 App <code>{`root.render()`}</code>
            會有第一次的初始渲染，之後如果要渲染畫面，就是用 hook 的方式，告知
            React 哪裡要重新渲染
          </li>
          <li>
            就像是在餐廳點餐，預設一進到餐廳會有一杯水 (初始渲染)，之後跟服務員
            (React 這個框架) 說我要點甜點、奶茶、布丁…服務員就要去廚房
            (Component Kitchen) 請廚房拿你點的東西，最後再呈現到你面前
            (畫面再次渲染)。
            <div className='flex items-center gap-4 mt-6'>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_render-and-commit1.png' />
                <h3 className='text-center'>Trigger</h3>
              </div>
              <div>
                <img src='https://react.dev/images/g_arrow.png' alt='' />
              </div>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_render-and-commit2.png' />
                <h3 className='text-center'>Render</h3>
              </div>
              <div>
                <img src='https://react.dev/images/g_arrow.png' alt='' />
              </div>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_render-and-commit3.png' />
                <h3 className='text-center'>Commit</h3>
              </div>
            </div>
          </li>
          <li>
            渲染一定是要 pure
            component，就好比你點了番茄湯，不該收到的是洋蔥沙拉！
          </li>
          <li>渲染只管自己的事，你的訂單不該改變到其他人的訂單</li>
          <li>
            如果渲染結果與上次相同，React 不會觸及 DOM 更新，React
            會自有一套機制去查找 JSX 裡的位置，比對前後內容
            <br />
            <ChallengeIFrame title='modern-snowflake-y5b4hi' />
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch02_Sec03;
