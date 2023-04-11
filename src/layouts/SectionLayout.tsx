import {
  NavLink,
  Outlet,
} from 'react-router-dom';

import { chapters } from '../assets/chaptersData';

type ChallengeNavLayoutProps = {
  challengeData: string[];
  ch: string;
  sec: string;
};
export const ChallengeNavLayout = ({
  challengeData,
  ch,
  sec,
}: ChallengeNavLayoutProps) => {
  const challengeNav = challengeData.map((challenge, idx) => (
    <NavLink key={`${challenge}_${idx}`} to={`/${ch}/${sec}/0${idx + 1}`}>
      {idx + 1}: <span dangerouslySetInnerHTML={{ __html: challenge }}></span>
    </NavLink>
  ));
  return (
    <>
      <nav className='third-nav'>{challengeNav}</nav>
      <Outlet />
    </>
  );
};
export const Notes = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <div className='notes'>
        <h3>{title}</h3>
        <p>章節筆記:</p>
        {children}
      </div>
      <h3 className='title-challenge'>挑戰題</h3>
    </>
  );
};

type SectionLayoutProps = {
  children: React.ReactNode;
  chIdx: number;
  secIdx: number;
};
export const SectionLayout = ({
  children,
  chIdx,
  secIdx,
}: SectionLayoutProps) => {
  const targetSection = chapters[chIdx]?.sections[secIdx];
  const sectionTitle = `${targetSection.name} ${targetSection.title}`;
  const chapterId = chapters[chIdx].id;
  const sectionId = targetSection?.id;
  return (
    <>
      <Notes title={`${sectionTitle}`}>{children}</Notes>
      <ChallengeNavLayout
        challengeData={targetSection?.challenges}
        ch={chapterId}
        sec={sectionId}
      />
    </>
  );
};
