import ChallengeIFrame from '../../chapters/ChallengeIFrame';
import { SectionLayout } from '../SectionLayout';

const Ch02_Sec05 = () => {
  return (
    <>
      <SectionLayout chIdx={1} secIdx={4}>
        <ol>
          <li>
            <p>
              React 會等到 event handlers
              的所有程式碼都運行後才處理狀態更新，就好像你跟服務員點餐，服務員不會在你點了第一道菜後就直接跑進廚房跟廚師說，會等你全部點餐完，也會幫同桌其他人都點好餐才送訂單
            </p>
            <p>
              可以更新多個 state，但不會觸發太多重新渲染，這種行為稱為批次處理，
            </p>
            <div className='max-w-[500px] flex mx-auto mt-6'>
              <img
                src='https://react.dev/images/docs/illustrations/i_react-batching.png'
                alt=''
              />
            </div>
          </li>
          <li>
            <p>
              在下次渲染之前如果想要更新同一組狀態多次，可以看以下範例，雖然平常不會這樣做
            </p>
            <p>
              在 setNumber 使用 callback function，將 number
              的值改變後回傳，React 會將這三次 setNumber
              放到序列中，在下次渲染時提供最新的狀態值
            </p>
            <ChallengeIFrame title='dazzling-minsky-vyqj9q' />
          </li>
          <li>
            <p>再看另一個範例</p>
            <ChallengeIFrame title='musing-varahamihira-f420lm' />
            <p className='bg-red-50 p-4'>提醒：<code>setState(5)</code>等同於<code>{`setState(n => 5)`}</code>，但 n 沒有用到</p>
            <table className='mt-6'>
              <thead>
                <tr>
                  <th>更新的佇列 (queued update)</th>
                  <th>n (回呼涵式的參數)</th>
                  <th>回傳 (return)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>被取代為 <code>5</code></td>
                  <td><code>0</code> (沒有用到)</td>
                  <td><code>5</code></td>
                </tr>
                <tr>
                  <td><code>{`n => n + 1`}</code></td>
                  <td><code>5</code></td>
                  <td><code>5 + 1 = 6</code></td>
                </tr>
                <tr>
                  <td>被取代為 <code>42</code></td>
                  <td><code>6</code> (沒有用到)</td>
                  <td><code>42</code></td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            總結：狀態的 setter 可以接收兩種形式放到更新佇列，第一種是回呼函式，第二種是任何值去取代前面的佇列
          </li>
          <li>setter 命名通常是看第一個參數名前面加上 set，e.g <code>[count, setCount]</code></li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch02_Sec05;
