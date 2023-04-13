import ChallengeLayout from '../../../ChallengeLayout';

type ItemProps = {
  name: string;
  importance: number;
};

function Item({ name, importance }: ItemProps) {
  return (
    <li className='item'>
      {name}
      {importance > 0 && <i> (Importance: {importance})”</i>}
    </li>
  );
}

export default function PackingList() {
  const challenge = (
    <>
      <ol>
        <li>
          用 <code>&&</code>
          判斷， <code>importance</code> prop 是否為 0，不是 0 才顯示
        </li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          <code>{`importance > 0 && <i> (Importance: {importance})”</i>`}</code>
          <p>
            官網提醒：不要直接寫成{' '}
            <code>{`importance && <i> (Importance: {importance})”</i>`}</code>
            ，這樣等於 0 也會顯示後面的值
          </p>
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={5}
      challengeIdx={1}
      challengeTxt={challenge}
      answer={ans}
      challengeIFrameTitle='wonderful-satoshi-bkbezx'
      solutionIFrameTitle='hardcore-waterfall-si4pi1'
    >
      <section>
        <h2>Sally Ride's Packing List</h2>
        <ul>
          <Item importance={9} name='Space suit' />
          <Item importance={0} name='Helmet with a golden leaf' />
          <Item importance={6} name='Photo of Tam' />
        </ul>
      </section>
    </ChallengeLayout>
  );
}
