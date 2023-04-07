import {
  NavLink,
  Outlet,
} from 'react-router-dom';

// import Header from "./Header";
// import Footer from "./Footer";

const Ch02_Layout = () => {
  return (
    <>
      <h2>第二章 Adding Interactivity</h2>
      <nav className="sub-nav">
        <NavLink to="/ch02/sec01">Section 1 - Responding to Events</NavLink>
        <NavLink to="/ch02/sec02">
          Section 2 - State: A Component's Memory
        </NavLink>
        <NavLink to="/ch02/sec03">Section 3 - Render and Commit</NavLink>
        <NavLink to="/ch02/sec04">Section 4 - State as a Snapshot</NavLink>
        <NavLink to="/ch02/sec05">
          Section 5 - Queueing a Series of State Updates
        </NavLink>
        <NavLink to="/ch02/sec06">
          Section 6 - Updating Objects in State
        </NavLink>
        <NavLink to="/ch02/sec07">Section 7 - Updating Arrays in State</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Ch02_Layout;
