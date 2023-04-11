import {
  NavLink,
  Outlet,
} from 'react-router-dom';

import { chapters } from '../assets/chaptersData';

const ChapterLayout = ({ idx, id }: { idx: number; id: string }) => {
  return (
    <>
      <h2>{chapters[idx].name} {chapters[idx].title}</h2>
      <nav className='sub-nav'>
        {chapters[idx].sections.map((section, index) => (
          <NavLink key={`${section.title}_${index}`} to={`/${id}/sec0${index + 1}`}>
            Section {index + 1} - {section.title}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
};
export const Ch01_Layout = () => {
  return (
    <>
      <ChapterLayout idx={0} id='ch01' />
    </>
  );
};

export const Ch02_Layout = () => {
  return (
    <>
      <ChapterLayout idx={1} id='ch02' />
    </>
  );
};
export const Ch03_Layout = () => {
  return (
    <>
      <ChapterLayout idx={2} id='ch03' />
    </>
  );
};
export const Ch04_Layout = () => {
  return (
    <>
      <ChapterLayout idx={3} id='ch04' />
    </>
  );
};