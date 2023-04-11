import { NavLink } from 'react-router-dom';

import { chapters } from '../assets/chaptersData';

const Header = () => {
  return (
    <nav className='header'>
      <ul className='nav-items'>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <NavLink to={`/${chapter.id}`}>
              <span>{chapter.name}</span>
              <small>{chapter.title}</small>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
