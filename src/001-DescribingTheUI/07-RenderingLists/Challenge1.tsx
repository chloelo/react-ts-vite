import { people } from './data';
import { getImageUrl, PersonProps } from './utils';
import './index.css'

type ListItemsProps = {
  people: PersonProps[];
  title: string;
}
function ListSection({ people, title }: ListItemsProps) {
  return (
    <>
      <h3>{title}</h3>
      {people.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      )}
    </>
  )
}

export default function List() {
  const chemistListItems = people.filter(person =>
    person.profession === 'chemist'
  )
  const notChemistListItems = people.filter(person =>
    person.profession !== 'chemist'
  )
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
  return (
    <article>
      <h1>Challenge 1 of 4: Splitting a list in two </h1>
      <h2>Scientists</h2>
      <ul><ListSection people={chemistListItems} title='Chemists' /></ul>
      <ul><ListSection people={notChemistListItems} title='Everyone Else' /></ul>
      {/* <ul>{listItems}</ul> */}
    </article>
  );
}
