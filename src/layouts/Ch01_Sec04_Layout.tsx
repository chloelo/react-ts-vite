import {
  NavLink,
  Outlet,
} from 'react-router-dom';

const Ch01_Sec04_Layout = () => {
  return (
    <>
      <div className='notes'>
        <h3>第四節 JavaScript in JSX with Curly Braces</h3>
        <p>章節筆記:</p>
        <ol>
          <li>在JSX裡單引號或雙引號傳遞的是字串</li>
          <li>花括號裡面可以帶入 js 邏輯和變數</li>
          <li>花括號放在屬性裡要用<code>{'='}</code>等號接，放在標籤內可以直接用</li>
          <li>看到兩層花括號只是因為裡面放了物件</li>
        </ol>
      </div>
      <h3 className='title-challenge'>挑戰題</h3>
      <nav className='third-nav'>
        <NavLink to='/ch01/sec04/01'>Challenge 1 of 3: Fix the mistake</NavLink>
        <NavLink to='/ch01/sec04/02'>
          Challenge 2 of 3: Extract information into an object
        </NavLink>
        <NavLink to='/ch01/sec04/03'>
          Challenge 3 of 3: Write an expression inside JSX curly braces
        </NavLink>
      </nav>
      {/* 以下顯示挑戰題 */}
      <Outlet />
    </>
  );
};

export default Ch01_Sec04_Layout;
