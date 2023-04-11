import ChallengeLayout from '../../../ChallengeLayout';
import Profile from '../Profile';

export default function Gallery() {
  const profilesData = [
    {
      userName: 'Maria Skłodowska-Curie',
      imageId: 'szV5sdG',
      profession: 'physicist and chemist',
      awardsList: [
        'Nobel Prize in Physics',
        'Nobel Prize in Chemistry',
        'Davy Medal',
        ' Matteucci Medal',
      ],
      discovered: 'polonium (element)',
    },
    {
      userName: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
      profession: 'geochemist',
      awardsList: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
      discovered: 'a method for measuring carbon dioxide in seawater',
    },
  ];
  const challenge = (
    <>
      <ol>
        <li>
          Gallery 組件裡面有兩個
          profile，結構看起來一樣，試著將重複的部分提取出來另建 Profile
          組件，傳入相對應的 props
        </li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          建立組件 Profile，將個別的 user name、image
          url、Profession、Awards、Discovered 變成 props 傳入
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={4}
      challengeIdx={0}
      challengeTxt={challenge}
      answer={ans}
    >
      <div>
        <h1>Notable Scientists</h1>
        {profilesData.map((profile) => (
          <Profile
            key={profile.imageId}
            userName={profile.userName}
            imageId={profile.imageId}
            profession={profile.profession}
            awardsList={profile.awardsList}
            discovered={profile.discovered}
            imageSize={80}
          />
        ))}

        {/* <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section> */}
        {/* <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section> */}
      </div>
    </ChallengeLayout>
  );
}
