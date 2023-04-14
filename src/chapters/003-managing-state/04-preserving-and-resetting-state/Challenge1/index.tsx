import { useState } from 'react';

import ChallengeIFrame from '../../../ChallengeIFrame';
import ChallengeLayout from '../../../ChallengeLayout';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  // if (showHint) {
  //   return (
  //     <div>
  //       <p><i>Hint: Your favorite city?</i></p>
  //       <Form />
  //       <button onClick={() => {
  //         setShowHint(false);
  //       }}>Hide hint</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <Form />
  //     <button onClick={() => {
  //       setShowHint(true);
  //     }}>Show hint</button>
  //   </div>
  // );
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
        secIdx={3}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='zen-moon-hz2q1x'
        solutionIFrameTitle='holy-bush-34tfou'
      >
        <div>
          {showHint && (
            <p>
              <i>Hint: Your favorite city?</i>
            </p>
          )}
          <Form />
          <button
            onClick={() => {
              setShowHint(!showHint);
            }}
          >
            {showHint ? 'Hide hint' : 'Show hint'}
          </button>
        </div>
      </ChallengeLayout>
      <p>官網提供的另一種解法：</p>
      <ChallengeIFrame title='goofy-panka-4ugeml' />
    </>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <>
      <textarea className='block my-3' value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}
