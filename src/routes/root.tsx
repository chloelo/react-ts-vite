import { createBrowserRouter } from 'react-router-dom';

import {
  Ch01_Sec01_01,
  Ch01_Sec01_02,
} from '../chapters';
import {
  Ch01_Layout,
  Ch01_Sec01,
  Ch01_Sec02,
  Ch01_Sec03,
  Ch01_Sec04,
  Ch01_Sec05,
  Ch01_Sec06,
  Ch01_Sec07,
  Ch01_Sec08,
  Ch02_Layout,
  Ch02_Sec01,
  Ch03_Layout,
  Ch04_Layout,
  RootLayout,
} from '../layouts';
import NotFound from '../views/NotFound';
import {
  Ch01_Sec01_challenges,
  Ch01_Sec02_challenges,
  Ch01_Sec03_challenges,
  Ch01_Sec04_challenges,
  Ch01_Sec05_challenges,
  Ch01_Sec06_challenges,
  Ch01_Sec07_challenges,
  Ch01_Sec08_challenges,
} from './ch01Challenges';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          // path: '', 等同 index: true,
          index: true, //  ' / === /ch01'
          element: <Ch01_Layout />,
        },
        {
          path: 'ch01',
          element: <Ch01_Layout />,
          children: [
            {
              path: '', // /ch01 === /ch01/sec01
              element: <Ch01_Sec01 />,
            },
            {
              path: 'sec01',
              element: <Ch01_Sec01 />,
              children: [
                ...Ch01_Sec01_challenges
              ],
            },
            {
              path: 'sec02',
              element: <Ch01_Sec02 />,
              children: [
                ...Ch01_Sec02_challenges
              ],
            },
            {
              path: 'sec03',
              element: <Ch01_Sec03 />,
              children: [
                ...Ch01_Sec03_challenges
              ],
            },
            {
              path: 'sec04',
              element: <Ch01_Sec04 />,
              children: [
                ...Ch01_Sec04_challenges
              ],
            },
            {
              path: 'sec05',
              element: <Ch01_Sec05 />,
              children: [
                ...Ch01_Sec05_challenges
              ],
            },
            {
              path: 'sec06',
              element: <Ch01_Sec06 />,
              children: [
                ...Ch01_Sec06_challenges
              ],
            },
            {
              path: 'sec07',
              element: <Ch01_Sec07 />,
              children: [
                ...Ch01_Sec07_challenges
              ],
            },
            {
              path: 'sec08',
              element: <Ch01_Sec08 />,
              children: [
                ...Ch01_Sec08_challenges
              ],
            },
          ],
        },
        {
          path: 'ch02',
          element: <Ch02_Layout />,
          children: [
            {
              path: 'sec01',
              element: <Ch02_Sec01 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec01_01 />,
                },
              ],
            },
            {
              path: '02',
              element: <Ch01_Sec01_02 />,
            },
          ],
        },
        {
          path: 'ch03',
          element: <Ch03_Layout />,
          children: [
            {
              path: 'sec01',
              element: <Ch02_Sec01 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec01_01 />,
                },
              ],
            },
            {
              path: '02',
              element: <Ch01_Sec01_02 />,
            },
          ],
        },
        {
          path: 'ch04',
          element: <Ch04_Layout />,
          children: [
            {
              path: 'sec01',
              element: <Ch02_Sec01 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec01_01 />,
                },
              ],
            },
            {
              path: '02',
              element: <Ch01_Sec01_02 />,
            },
          ],
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]
  // createRoutesFromElements(
  //   <Route path='/' element={<Layout />}>
  //     <Route index element={<Home />}></Route>
  //     {/* <Route path="chapters" element={<Chapters />} />
  //      */}
  //     <Route path="chapters" element={<ChapterLayout />}>
  //       <Route index element={<Chapters />} />
  //       <Route path=":id" element={<Chapter />} />
  //     </Route>
  //     <Route path="page1" element={<Page1 />} />
  //     <Route path="page2" element={<Page2 />} />
  //     <Route path="*" element={<NotFound />} />
  //   </Route>
  // )
);
// const allRoutes = [
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'chapters',
//         element: <Chapters />,
//       },
//       {
//         path: 'page1',
//         element: <Page1 />
//       },
//       {
//         path: 'page2',
//         element: <Page2 />
//       },
//       {
//         path: '*',
//         element: <NotFound />
//       },
//     ],
//   }
// ]
export default router;
