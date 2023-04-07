import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <ul className="nav-items">
        {/* <li>
          <NavLink to="/">HOME</NavLink>
        </li> */}
        <li>
          <NavLink to="/ch01">
            <span>第一章</span>
            <small>Describing the UI</small>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ch02">
            <span>第二章</span>
            <small>Adding Interactivity</small>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ch03">
            <span>第三章</span>
            <small>Managing State</small>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ch04">
            <span>第四章</span>
            <small>Escape Hatches</small>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
