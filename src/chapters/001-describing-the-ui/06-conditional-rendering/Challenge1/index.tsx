import ChallengeLayout from '../../../ChallengeLayout';

type ItemProps = {
  name: string;
  isPacked: boolean;
};

function Item({ name, isPacked }: ItemProps) {
  return (
    <li className='item'>
      {/* {name} {isPacked && '✔'} */}
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  const challenge = (
    <>
      <ol>
        <li>用三元運算判斷顯示 icon</li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          判斷<code>isPacked</code>是否是 true，
          <code>{`{name} {isPacked ? '✔' : '❌'}`}</code>
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={5}
      challengeIdx={0}
      challengeTxt={challenge}
      answer={ans}
      challengeIFrameTitle='flamboyant-pascal-3o6p96'
      solutionIFrameTitle='clever-aj-nnnz47'
    >
      <section>
        <h2>Sally Ride's Packing List</h2>
        <ul>
          <Item isPacked={true} name='Space suit' />
          <Item isPacked={true} name='Helmet with a golden leaf' />
          <Item isPacked={false} name='Photo of Tam' />
        </ul>
      </section>
    </ChallengeLayout>
  );
}
