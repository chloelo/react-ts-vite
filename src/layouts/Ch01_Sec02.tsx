import { SectionLayout } from './SectionLayout';

const Ch01_Sec02 = () => {
  return (
    <>
      <SectionLayout chIdx={0} secIdx={1}>
        <ol>
          <li>
            export default - 一個檔案只能有一個 default，import 時直接引用
            <p>
              <code>
                export default function Button() {'\u007B'}
                {'\u007d'}
              </code>
            </p>
            <p>
              <code>import Button from './Button.js';</code>
            </p>
          </li>
          <li>
            具名 export - 一個檔案裡可以有很多，在別的地方 import 時要加上大括號
            <p>
              <code>
                export function Button() {'\u007B'}
                {'\u007d'}{' '}
              </code>
            </p>
            <p>
              <code>
                import {'\u007B'} Button {'\u007d'} from './Button.js';
              </code>
            </p>
          </li>
        </ol>
      </SectionLayout>
    </>
  );
};
export default Ch01_Sec02;
