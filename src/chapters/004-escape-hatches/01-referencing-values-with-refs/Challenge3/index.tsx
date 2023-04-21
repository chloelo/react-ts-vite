import { useRef } from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

// let timeoutID;
type DebouncedButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};
function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
  const timeoutRef = useRef<NodeJS.Timeout | number>(0);
  return (
    <button
      onClick={() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}
export default function App() {
  const challenge = (
    <>
      <p>不同的按鈕個別連續點擊，只會alert最後一個點擊的按鈕，請修復</p>
    </>
  );
  const ans = (
    <>
      <ul>
        <li>
          原題目將 timeoutID 放在 component
          外，這樣每個component是共用同一個外來的變數，會造成非預期的side
          effect，每個 component
          都要有自己空間的變數，不被外部影響也不會影響外部
        </li>
        <li>
          官網提供的研究文件{' '}
          <a href='https://redd.one/blog/debounce-vs-throttle' target='_blank'>
            Debounce vs Throttle
          </a>
        </li>
      </ul>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={0}
        challengeIdx={2}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='angry-glitter-9ioy7q'
        solutionIFrameTitle='serene-dust-r4uhbd'
      >
        <>
          <div className='challenge04-01-wrap'>
            <DebouncedButton onClick={() => alert('Spaceship launched!')}>
              Launch the spaceship
            </DebouncedButton>
            <DebouncedButton onClick={() => alert('Soup boiled!')}>
              Boil the soup
            </DebouncedButton>
            <DebouncedButton onClick={() => alert('Lullaby sung!')}>
              Sing a lullaby
            </DebouncedButton>
          </div>
        </>
      </ChallengeLayout>
    </>
  );
}
