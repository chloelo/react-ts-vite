import {
  NavLink,
  Outlet,
} from 'react-router-dom';

const Ch01_Sec01_Layout = () => {
  return (
    <>
      <div className='notes'>
        <h3>第一節 Your First Component</h3>
        <p>章節筆記:</p>
        <ol>
          <li>定義元件開頭大寫，小寫的標籤就會被 React 認作是 Html 原生標籤</li>
          <li>標籤要有結尾</li>
          <li>最外層只能有一個標籤</li>
          <li>不要定義 Function component 裡又定義別的 Function component</li>
          <li>return 後面不能直接換行，保險起見加上小括號</li>
        </ol>
      </div>
      <h3 className='title-challenge'>挑戰題</h3>
      <nav className='third-nav'>
        <NavLink to='/ch01/sec01/01'>
          Challenge 1 of 4: Export the component
        </NavLink>
        <NavLink to='/ch01/sec01/02'>
          Challenge 2 of 4: Fix the return statement
        </NavLink>
        <NavLink to='/ch01/sec01/03'>
          Challenge 3 of 4: Spot the mistake
        </NavLink>
        <NavLink to='/ch01/sec01/04'>
          Challenge 4 of 4: Your own component
        </NavLink>
      </nav>
      {/* 以下顯示挑戰題 */}
      <Outlet />
    </>
  );
};

export default Ch01_Sec01_Layout;
