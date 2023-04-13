import ChallengeIFrame from '../../chapters/ChallengeIFrame';
import { SectionLayout } from '../SectionLayout';

const Ch02_Sec01 = () => {
  return (
    <>
      <SectionLayout chIdx={1} secIdx={0}>
        <ol>
          <li>事件函式通常以 handle 開頭命名，e.g. handleClick</li>
          <li>
            <h4>以點擊事件為例</h4>
            <p>
              函式不要直接加上小括號，這樣render時就會直接呼叫
              <br />
              直接在行內撰寫函式，可以寫成箭頭函數包住要執行的函示，才不會直接執行
            </p>
            <table>
              <thead>
                <tr>
                  <th>passing a function (correct)</th>
                  <th>calling a function (incorrect)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>{`<button onClick={handleClick}>`}</code>{' '}
                  </td>
                  <td>
                    <code>{`<button onClick={handleClick()}>`}</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>{`<button onClick={() => alert('...')}>`}</code>{' '}
                  </td>
                  <td>
                    <code>{`<button onClick={alert('...')}>`}</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <p>事件處理函式可以接收 prop 的值當參數</p>
            <ChallengeIFrame title='fast-cdn-rkshhm' />
          </li>
          <li>
            <p>事件處理函式可以當作 props 傳入</p>
            <ChallengeIFrame title='jovial-frost-y81hok' />
          </li>
          <li>
            <p>自訂 prop 如果是傳入事件函式，通俗以 on 開頭命名</p>
            <ChallengeIFrame title='trusting-villani-hwd014' />
          </li>
          <li>
            停止冒泡事件、阻止預設事件寫法與原生 JS 相同
            <br />
            <code>{`
              <button onClick={e => {
                e.stopPropagation(); // 不要冒泡
                onClick();
              }}>
                {children}
              </button>
            `}</code>
            <br />
            <br />
            <code>{`
              <form onSubmit={e => {
                  e.preventDefault(); // 不要跳頁
                  alert('Submitting!');
                }}>
                  <input />
                  <button>Send</button>
                </form>
            `}</code>
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch02_Sec01;
