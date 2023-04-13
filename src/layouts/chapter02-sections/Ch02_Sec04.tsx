import ChallengeIFrame from '../../chapters/ChallengeIFrame';
import { SectionLayout } from '../SectionLayout';

const Ch02_Sec04 = () => {
  return (
    <>
      <SectionLayout chIdx={1} secIdx={3}>
        <h4>導讀影片</h4>
        <div className='yt-iframe-wrap'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/v9MYw5ZcZQw'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
        <ol>
          <li>
            render 在 react 裡的意思就是 component function 被呼叫，function
            會回傳一個 JSX
            <div className='flex items-center gap-4 mt-6'>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_render1.png' />
                <h3 className='text-center'>React executing the function</h3>
              </div>
              <div>
                <img src='https://react.dev/images/g_arrow.png' alt='' />
              </div>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_render2.png' />
                <h3 className='text-center'>Calculating the snapshot</h3>
              </div>
              <div>
                <img src='https://react.dev/images/g_arrow.png' alt='' />
              </div>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_render3.png' />
                <h3 className='text-center'>Updating the DOM tree</h3>
              </div>
            </div>
          </li>
          <li>
            每次 render， react 會把 JSX
            當成一個快照記錄下來，再把這次快照跟前一次快照做比對，看是否有需要更新畫面，有不一樣才會更新畫面
            <div className='flex items-center gap-4 mt-6'>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_state-snapshot1.png' />
                <h3 className='text-center'>
                  You tell React to update the state
                </h3>
              </div>
              <div>
                <img src='https://react.dev/images/g_arrow.png' alt='' />
              </div>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_state-snapshot2.png' />
                <h3 className='text-center'>React updates the state value</h3>
              </div>
              <div>
                <img src='https://react.dev/images/g_arrow.png' alt='' />
              </div>
              <div>
                <img src='https://react.dev/images/docs/illustrations/i_state-snapshot3.png' />
                <h3 className='text-center'>
                  React passes a snapshot of the state value into the component
                </h3>
              </div>
            </div>
          </li>
          <li>
            <h3 className='text-amber-600 '>
              此章節的最重點：所有運算的 state，在 function 執行的當下 (render)
              就已經被決定了
            </h3>
          </li>
          <li>
            <p>
              以下範例，怎麼點 +3 按鈕都是只有加 1，{' '}
              <code>{`setNumber(number + 1);`}</code>
              就算跑三次，number 當下快照的值就是 0，(0+1) 跑三次就會是 0
            </p>
            <ChallengeIFrame title='dry-forest-7os05q' />
          </li>
          <li>
            <p>
              再看一個 alert 的例子，alert 出現的數字會是 0，alert
              關掉後畫面才會顯示 5，因為 alert 當下 number 的快照值就是 0
            </p>
            <ChallengeIFrame title='cranky-breeze-qvkn25' />
          </li>
          <li>
            <p>
              如果是非同步的情況呢？
              <br />
              可以看到畫面先變成 5，但 3秒後 alert 的數字依舊是 0 <br />
              拆解來看就很像是 <br />
              <code>
                {`setNumber(0 + 5);`}
                <br />
              </code>
              <code>{`
              setTimeout(() => {
                alert(0);
              }, 3000);
            `}</code>
            </p>
            <ChallengeIFrame title='small-mountain-9162ll' />
          </li>
          <li>但不要與原生 JS 混淆，原生 JS 非同步事件永遠是最後執行的</li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch02_Sec04;
