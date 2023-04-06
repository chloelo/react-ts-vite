import { NavLink  } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav-items">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/chapters">Chapters</NavLink>
        </li>
        <li>
          <NavLink  to="/page1">PAGE1</NavLink>
        </li>
        <li>
          <NavLink  to="/page2">PAGE2</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
