import ChallengeLayout from '../../../ChallengeLayout';

type CardProps = {
  title: string;
  content?: string;
  userName?: string;
  url?: string;
  size?: number;
};

export default function Profile() {
  const challenge = (
    <>
      <ol>
        <li>將Card組件獨立出來，並使用children prop 呈現不同的內容</li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          共同的屬性，像是卡片標題直接傳prop到 Card
          component，不同內容像是一個卡片裡面有頭像，另一個卡片裡有段落文字，就使用
          children 屬性
          <p>
            <code>
              {`<div className='card'>`}
              <br />　<span>　</span>
              {`<div className='card-content'>
                  <h1>{title}</h1>
                  {children}
                </div>`}
              <br />
              {`</div>`}
            </code>
          </p>
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={4}
      challengeIdx={2}
      challengeTxt={challenge}
      answer={ans}
      challengeIFrameTitle='naughty-allen-q7gkoz'
      solutionIFrameTitle='gallant-carson-obht1g'
    >
      <div className='challenge01-05-wrap'>
        <Card title='Photo'>
          <img
            className='avatar'
            src='https://i.imgur.com/OKS67lhm.jpg'
            alt='Aklilu Lemma'
            width={70}
            height={70}
          />
        </Card>
        <Card title='About'>
          <p>
            Aklilu Lemma was a distinguished Ethiopian scientist who discovered
            a natural treatment to schistosomiasis.
          </p>
        </Card>
      </div>
    </ChallengeLayout>
  );
}
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement;
}) {
  return (
    <div className='card'>
      <div className='card-content'>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

// function Card({ title, content, userName, url, size}: CardProps) {
//   return (
//     <div className="card">
//       <div className="card-content">
//         <h1>{title}</h1>
//         {
//           content && <p>{content}</p>
//         }
//         {
//           url && (
//             <img
//               className="avatar"
//               src={url}
//               alt={userName}
//               width={size}
//               height={size}
//             />
//           )
//         }

//       </div>
//     </div>
//   )
// }
