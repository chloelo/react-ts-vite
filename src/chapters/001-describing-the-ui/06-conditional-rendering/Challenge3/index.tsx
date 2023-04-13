import ChallengeLayout from '../../../ChallengeLayout';

type Drink = {
  plant: string;
  caffeine: string;
  age: string;
};
type Drinks = {
  tea: Drink;
  coffee: Drink;
};

const drinks: Drinks = {
  tea: {
    plant: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years',
  },
  coffee: {
    plant: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years',
  },
};
type Drinks2 = typeof drinks;
// type keyNames = keyof typeof drinks

function Drink({ name }: { name: keyof Drinks2 }) {
  const info = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
        {/* <dt>Part of plant</dt>
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd> */}
      </dl>
    </section>
  );
}

export default function DrinkList() {
  const challenge = (
    <>
      <ol>
        <li>
          目前範例不同資訊 (plant、caffeine、age) 重複一樣的判斷式{' '}
          <code>{`name === 'tea' ?`}</code>，請用 <code>if</code>{' '}
          的方式重構程式碼
        </li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>
          官網解法：
          <code>
            {`
            if (name === 'tea') {
              ...
            } else if (name === 'coffee') {
              ...
            }
            `}
          </code>
        </li>
        <li>
          自己嘗試用 mapping 的方式改寫
          <code>
            {`
              const mapping = {
                tea: {
                  plant: 'leaf',
                  caffeine: '15–70 mg/cup',
                  age: '4,000+ years',
                },
                coffee: {
                  plant: 'bean',
                  caffeine: '80–185 mg/cup',
                  age: '1,000+ years',
                }
              }
            `}
          </code>
          <p>
            取得對應的obj：<code>{`info = mapping[name]`}</code>{' '}
          </p>
          <p>
            畫面JSX： <code>{`{info.plant}、{info.caffeine}、{info.age}`}</code>
          </p>
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={5}
      challengeIdx={2}
      challengeTxt={challenge}
      answer={ans}
      challengeIFrameTitle='nostalgic-panini-0ps76v'
      solutionIFrameTitle='youthful-lehmann-uueiyu'
    >
      <Drink name='tea' />
      <Drink name='coffee' />
    </ChallengeLayout>
  );
}
