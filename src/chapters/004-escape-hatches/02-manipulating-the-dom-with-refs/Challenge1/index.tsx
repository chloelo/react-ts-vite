import {
  useRef,
  useState,
} from 'react';

import ChallengeLayout from '../../../ChallengeLayout';

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    nextIsPlaying ? videoRef.current!.play() : videoRef.current!.pause();
  }

  return (
    <>
      <button className='block mb-5' onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width='250' ref={videoRef}>
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          type='video/mp4'
        />
      </video>
    </>
  );
}

export default function App() {
  const challenge = (
    <>
      <p>
        目前按鈕點擊可以 toggle 文字播放/暫停，但下方的 video
        沒有反應，請修正此問題
      </p>
    </>
  );
  const ans = (
    <>
      <ul>
        <li>
          因為要使用 web api 提供給 video 的兩個方法 - <code>play()</code> 和{' '}
          <code>pause()</code>，我們要操作 video 這個 DOM，將 video 標籤加上 ref
        </li>
        <li>
          官網範例有提醒，可以在 video 標籤上綁定 <code>onPlay</code> 和
          <code>onPause</code> 兩個 event，如果使用者是用瀏覽器的控制器操作
          video，video 的狀態才會一致
        </li>
      </ul>
    </>
  );
  return (
    <>
      <ChallengeLayout
        chIdx={3}
        secIdx={1}
        challengeIdx={0}
        challengeTxt={challenge}
        answer={ans}
        challengeIFrameTitle='cold-tree-9vqoym'
        solutionIFrameTitle='gracious-pond-j42s0w'
      >
        <>
          <VideoPlayer />
        </>
      </ChallengeLayout>
    </>
  );
}
