import {
  NavLink,
  Outlet,
} from 'react-router-dom';

const Ch01_Sec03_Layout = () => {
  return (
    <>
      <div className='notes'>
        <h3>第三節 Writing Markup with JSX</h3>
        <p>章節筆記:</p>
        <ol>
          <li>
            JSX 只能 return 單一根元素，如果不想有多餘的標籤可以使用
            fragment，可以寫成
            <code>{'<> </>'}</code>
          </li>
          <li>JSX 有錯誤時通常依循錯誤提示可以知道除錯方向</li>
        </ol>
      </div>
      <h3 className='title-challenge'>挑戰題</h3>
      <nav className='third-nav'>
        <NavLink to='/ch01/sec03/01'>
          Challenge 1 of 1: Convert some HTML to JSX
        </NavLink>
      </nav>
      {/* 以下顯示挑戰題 */}
      <Outlet />
    </>
  );
};

export default Ch01_Sec03_Layout;
