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
  imgUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
};
const challenge = (
  <>
    <ol>
      <li>將圖片路徑提取出來，放到 person物件裡，改用取得物件的key顯示圖片</li>
    </ol>
  </>
);
const ans = (
  <>
    <ol>
      <li>
        <p>
          person 物件新增 key和 value -{' '}
          <code>imageUrl: "https://i.imgur.com/7vQD0fPs.jpg"</code>
        </p>
        <p>
          圖片路徑改成花括號取得person物件的 imageUrl，
          <code>
            {' '}
            src={'\u007B'}person.imageUrl{'\u007d'}
          </code>
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
      challengeIdx={1}
      challengeTxt={challenge}
      answer={ans}
    >
      <div className='challenge01-04-wrap' style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img className='avatar' src={person.imgUrl} alt='Gregorio Y. Zara' />
        <ul className='challengeUl'>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </ChallengeLayout>
  );
}
