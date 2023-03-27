import Panel from './Panel';
import { getImageUrl, PersonProps } from './utils';

// let currentPerson:PersonProps;

export default function Profile({ person }: { person: PersonProps }) {
  // currentPerson = person;
  return (
    <Panel>
      <>
        <Header person={person} />
        <Avatar person={person} />
      </>
    </Panel>
  )
}

function Header({ person }: { person: PersonProps }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }: { person: PersonProps }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
