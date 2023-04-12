import ChallengeLayout from '../../../ChallengeLayout';

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
  imageId: '7vQD0fP',
  imageSize: 's',
  // imgUrl:'https://i.imgur.com/7vQD0fPs.jpg'
};
const challenge = (
  <>
    <ol>
      <li>
        圖片路徑的物件格式改了，分別有 <code>imageId</code>、
        <code>imageSize</code>、<code>baseUrl</code>
        ，請在花括號裡加入表達式呈現圖片路徑
      </li>
    </ol>
  </>
);
const ans = (
  <>
    <ol>
      <li>
        <p>
          圖片路徑的花括號裡可以放入 JS 邏輯，包含字串面板，所以寫成{' '}
          <code>
            {' '}
            src={'\u007B'}`${'\u007B'}baseUrl{'\u007d'}${'\u007B'}
            person.imageId{'\u007d'}${'\u007B'}person.imageSize{'\u007d'}.jpg`
            {'\u007d'}
          </code>{' '}
          即可正確呈現
        </p>
      </li>
    </ol>
  </>
);
export default function TodoList() {
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={3}
      challengeIdx={2}
      challengeTxt={challenge}
      answer={ans}
      challengeIFrameTitle='confident-marco-g13qsd'
      solutionIFrameTitle='compassionate-bush-2dhqyt'
    >
      <div className='challenge01-04-wrap' style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className='avatar'
          src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
          alt='Gregorio Y. Zara'
        />
        <ul className='challengeUl'>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </ChallengeLayout>
  );
}
