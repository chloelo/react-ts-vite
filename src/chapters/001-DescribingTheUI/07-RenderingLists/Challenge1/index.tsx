import ChallengeLayout from '../../../ChallengeLayout';
import { people } from '../data';
import {
  getImageUrl,
  PersonProps,
} from '../utils';

type ListItemsProps = {
  people: PersonProps[];
  title: string;
};
function ListSection({ people, title }: ListItemsProps) {
  return (
    <>
      <h3>{title}</h3>
      {people.map((person) => (
        <li key={person.id}>
          <img src={getImageUrl(person)} alt={person.name} />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      ))}
    </>
  );
}

export default function List() {
  const chemistListItems = people.filter(
    (person) => person.profession === 'chemist'
  );
  const notChemistListItems = people.filter(
    (person) => person.profession !== 'chemist'
  );
  // const listItems = people.map(person =>
  //   <li key={person.id}>
  //     <img
  //       src={getImageUrl(person)}
  //       alt={person.name}
  //     />
  //     <p>
  //       <b>{person.name}:</b>
  //       {' ' + person.profession + ' '}
  //       known for {person.accomplishment}
  //     </p>
  //   </li>
  // );
  const challenge = (
    <>
      <ol>
        <li>將 list 區分成兩種，一種是化學家，一種是其他</li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>將陣列用 filter 去處理，chemist 一類，不是 chemist 一類</li>
        <li>
          並可以將顯示的 list 抽出組成獨立的 component
          <code>{`<ListSection people={chemistListItems} title='Chemists' />`}</code>
          <code>{`<ListSection people={notChemistListItems} title='Everyone Else' />`}</code>
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={6}
      challengeIdx={0}
      challengeTxt={challenge}
      answer={ans}
    >
      <article className='challenge01-07-wrap'>
        <h2>Scientists</h2>
        <ul>
          <ListSection people={chemistListItems} title='Chemists' />
        </ul>
        <ul>
          <ListSection people={notChemistListItems} title='Everyone Else' />
        </ul>
        {/* <ul>{listItems}</ul> */}
      </article>
    </ChallengeLayout>
  );
}
