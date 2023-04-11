// export default function Bio() {
//   return (
//     <div class="intro">
//       <h1>Welcome to my website!</h1>
//     </div>
//     <p class="summary">
//       You can find my thoughts here.
//       <br><br>
//       <b>And <i>pictures</b></i> of scientists!
//     </p>
//   );
// }
import ChallengeLayout from '../../../ChallengeLayout';

export default function Bio() {
  const challenge = (
    <>
      <ol>
        <li>
          第一個 Error，錯誤提示：{' '}
          <code>
            Did you want a JSX fragment <>...</>?
          </code>
        </li>
        <li>
          第二個 Error，錯誤提示： <code>{'<b>And <i>pictures</b></i>'}</code>{' '}
          <code>
            Expected corresponding JSX closing tag for
            {'<i>'}
          </code>
        </li>
        <li>
          第三個 Error，錯誤提示：{' '}
          <code>{'Expected corresponding JSX closing tag for <br>'}</code>
        </li>
        <li>
          警示提示{' '}
          <code>
            {'Warning: Invalid DOM property `class`. Did you mean `className`?'}
          </code>
        </li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>依據提示在最外層用 fragment 標籤包住</li>
        <li>標籤的結構不對，在此範例將 b 標籤包住 i 標籤即可</li>
        <li>
          單一標籤要補上結尾斜線符號 <code>{'<br />'}</code>
        </li>
        <li>
          html 的 class 與 js 的類別 class 撞名，特殊字不能用，原本的 class 改成
          className 即可
        </li>
      </ol>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={0}
        secIdx={2}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
      >
        <div className='challenge01-03-wrap'>
          <div className='intro'>
            <h1>Welcome to my website!</h1>
          </div>
          <p className='summary'>
            You can find my thoughts here.
            <br />
            <br />
            <b>
              And <i>pictures</i>
            </b>{' '}
            of scientists!
          </p>
        </div>
      </ChallengeLayout>
    </>
  );
}
