import {
  NavLink,
  Outlet,
} from 'react-router-dom';

// import Header from "./Header";
// import Footer from "./Footer";

const Ch01_Layout = () => {
  return (
    <>
      <h2>第一章 Describing the UI</h2>
      <nav className="sub-nav">
        <NavLink to="/ch01/sec01">Section 1 - Your First Component</NavLink>
        <NavLink to="/ch01/sec02">
          Section 2 - Importing and Exporting Components
        </NavLink>
        <NavLink to="/ch01/sec03">Section 3 - Writing Markup with JSX</NavLink>
        <NavLink to="/ch01/sec04">
          Section 4 - JavaScript in JSX with Curly Braces
        </NavLink>
        <NavLink to="/ch01/sec05">
          Section 5 - Passing Props to a Component
        </NavLink>
        <NavLink to="/ch01/sec06">Section 6 - Conditional Rendering</NavLink>
        <NavLink to="/ch01/sec07">Section 7 - Rendering Lists</NavLink>
        <NavLink to="/ch01/sec08">Section 8 - Keeping Components Pure</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Ch01_Layout;
