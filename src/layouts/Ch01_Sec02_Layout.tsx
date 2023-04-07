import {
  NavLink,
  Outlet,
} from 'react-router-dom';

const Ch01_Sec02_Layout = () => {
  return (
    <>
      <div className='notes'>
        <h3>第二節 Importing and Exporting Components</h3>
        <p>章節筆記:</p>
        <ol>
          <li>
            export default - 一個檔案只能有一個 default，import 時直接引用
            <p>
              <code>export default function Button() {'\u007B'}{'\u007d'}</code>
            </p>
            <p>
              <code>import Button from './Button.js';</code>
            </p>
          </li>
          <li>
            具名 export - 一個檔案裡可以有很多，在別的地方 import 時要加上大括號
            <p>
              <code>export function Button() {'\u007B'}{'\u007d'} </code>
            </p>
            <p>
              <code>
                import {'\u007B'} Button {'\u007d'} from './Button.js';
              </code>
            </p>
          </li>
        </ol>
      </div>
      <h3 className='title-challenge'>挑戰題</h3>
      <nav className='third-nav'>
        <NavLink to='/ch01/sec02/01'>
          Challenge 1 of 1: Split the components further
        </NavLink>
      </nav>
      {/* 以下顯示挑戰題 */}
      <Outlet />
    </>
  );
};

export default Ch01_Sec02_Layout;
