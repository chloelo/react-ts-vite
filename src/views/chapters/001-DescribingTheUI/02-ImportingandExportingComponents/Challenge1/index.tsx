import ChallengeLayout from '../../../ChallengeLayout';
import Gallery from './Gallery';
import { Profile } from './Profile';

export default function App() {
  return (
    <>
      <ChallengeLayout
        title='Challenge 1 of 1: Split the components further'
        challengeTxt='拆分組件，並學習 export、import，具名與 default 的差異'
        answer='將 Profile 從 Gallery 裡拆出，他們是獨立的且可覆用的組件'
      >
        <p>Profile component</p>
        <Profile />
        <hr />
        <p>Gallery component</p>
        <Gallery />
      </ChallengeLayout>
    </>
  );
}
