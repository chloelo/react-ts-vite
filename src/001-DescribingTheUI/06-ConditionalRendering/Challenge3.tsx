
type Drink = {
  plant: string,
  caffeine: string,
  age: string,
};
type Drinks = {
  tea: Drink,
  coffee: Drink,
}

const drinks: Drinks = {
  tea: {
    plant: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    plant: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years'
  }
}
type Drinks2 = typeof drinks;
// type keyNames = keyof typeof drinks

function Drink({ name }: { name:  keyof Drinks2 }) {
  const info = drinks[name]
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
  return (
    <div>
      <h1>Challenge 3 of 3: Refactor a series of ? : to if and variables</h1>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
