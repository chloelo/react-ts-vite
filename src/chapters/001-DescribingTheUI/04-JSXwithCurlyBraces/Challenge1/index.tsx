import ChallengeLayout from '../../../ChallengeLayout';

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
        Error，錯誤提示： <code>Objects are not valid as a React child</code>
      </li>
    </ol>
  </>
);
const ans = (
  <>
    <ol>
      <li>
        依據錯誤提示，花括號內放了一個物件，但 React
        不知道要怎麼顯示他，可以指定要顯示的key，如果是陣列就跑迴圈顯示
      </li>
    </ol>
  </>
);
export default function TodoList() {
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={3}
      challengeIdx={0}
      challengeTxt={challenge}
      answer={ans}
      challengeIFrameTitle='optimistic-estrela-iv8vfe'
      solutionIFrameTitle='heuristic-wave-crznkm'
    >
      <View />
    </ChallengeLayout>
  );
}
function View() {
  return (
    <>
      <div className='challenge01-04-wrap' style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className='avatar'
          src='https://i.imgur.com/7vQD0fPs.jpg'
          alt='Gregorio Y. Zara'
        />
        <ul className='challengeUl'>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}
