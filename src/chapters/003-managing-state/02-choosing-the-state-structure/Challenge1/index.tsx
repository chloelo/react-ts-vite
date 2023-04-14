import {
  useEffect,
  useState,
} from 'react';

import ChallengeIFrame from '../../../ChallengeIFrame';
import ChallengeLayout from '../../../ChallengeLayout';
import Clock from './Clock';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  const challenge = (
    <>
      <p>說明待完成，之後補上</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={2}
        secIdx={1}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='affectionate-leftpad-iwgppc'
        solutionIFrameTitle='interesting-benz-oii2r3'
      >
        <div>
          <p>不要把 props 塞進useState裡，不會同步更新</p>
          <hr />
          <p>
            Pick a color:{' '}
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value='lightcoral'>lightcoral</option>
              <option value='midnightblue'>midnightblue</option>
              <option value='rebeccapurple'>rebeccapurple</option>
            </select>
          </p>
          <Clock color={color} time={time.toLocaleTimeString()} />
        </div>
      </ChallengeLayout>
      <p>官網提供的另一種解法：</p>
      <ChallengeIFrame title='serene-butterfly-vhzjjk' />
    </>
  );
}
