import ChallengeLayout from '../../../ChallengeLayout.js';
import { getFinalState } from './processQueue.js';

function increment(n: number) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

const doubleNum = (x: number) => {
  return x * 2;
};
// doubleNum.toString = () => 'doubleNum fn toString'
// let Bstr = doubleNum.toString = () => 'doubleNum Bstr toString'
// console.log(doubleNum.toString = () => 'doubleNum fn toString')
// console.log('Bstr array: '+[Bstr,Bstr,Bstr].join(', '))
console.log('======================================');
console.log('doubleNum array: ' + [doubleNum, doubleNum, doubleNum].join(', '));

export default function App() {
  const challenge = (
    <>
      <p>說明待完成，之後補上</p>
    </>
  );
  const ans = <p>說明待完成，之後補上</p>;
  return (
    <>
      <ChallengeLayout
        chIdx={1}
        secIdx={4}
        challengeIdx={1}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='elastic-hypatia-es6uix'
        solutionIFrameTitle='headless-pine-jpe22b'
      >
        {' '}
        <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
        <hr />
        <TestCase
          baseState={0}
          queue={[increment, increment, increment]}
          expected={3}
        />
        <hr />
        <TestCase baseState={0} queue={[5, increment]} expected={6} />
        <hr />
        <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
      </ChallengeLayout>
    </>
  );
}

export type CaseProps = {
  baseState: number;
  queue: Array<Function | number>;
  expected: number;
};
function TestCase({ baseState, queue, expected }: CaseProps) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(', ')}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? 'green' : 'red',
        }}
      >
        Your result: <b>{actual}</b> (
        {actual === expected ? 'correct' : 'wrong'})
      </p>
    </>
  );
}
