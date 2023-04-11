import ChallengeLayout from '../../../ChallengeLayout';
import { getImageUrl2 } from '../utils';

export type Person = {
  name: string;
  imageId: string;
};
type AvatarProps = {
  person: Person;
  size: number;
};
const ratio = window.devicePixelRatio;
function Avatar({ person, size }: AvatarProps) {
  // let thumbnailSize = size < 90 ? 's' : 'b';
  let thumbnailSize = 's';
  if (size * ratio > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className='avatar'
      src={getImageUrl2(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  const challenge = (
    <>
      <ol>
        <li>
          使用 props 傳入動態圖片尺寸，依據傳入的數字判斷 image url
          要載入大尺寸還是小尺寸圖片
        </li>
      </ol>
    </>
  );
  const ans = (
    <>
      <ol>
        <li>判斷如果傳入的 props 大於 90 就放大尺寸 image url，反之放小尺寸</li>
        <li>
          範例解答有提供另一種判斷圖片尺寸大小的方法：{' '}
          <a
            href='https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio'
            target='_blank'
          >
            window.devicePixelRatio
          </a>
          ，告訴瀏覽器應使用多少屏幕實際像素來繪製單個 CSS 像素
        </li>
      </ol>
    </>
  );
  return (
    <ChallengeLayout
      chIdx={0}
      secIdx={4}
      challengeIdx={1}
      challengeTxt={challenge}
      answer={ans}
    >
      <Avatar
        size={40}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
      <Avatar
        size={70}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
      <Avatar
        size={120}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
    </ChallengeLayout>
  );
}
