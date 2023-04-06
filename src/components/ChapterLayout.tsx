import { NavLink,Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

const ChapterLayout = () => {
  return (
    <>
      <nav>
        <span>
          <NavLink to="/chapters/1">Chapter 1</NavLink>
        </span>
        <span>
          <NavLink to="/chapters/2">Chapter 2</NavLink>
        </span>
      </nav>
      <Outlet />
    </>
    // <div>
    //   <Header />
    //   <Outlet />
    //   <Footer />
    // </div>
  );
};

export default ChapterLayout;
