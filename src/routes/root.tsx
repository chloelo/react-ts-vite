import { createBrowserRouter } from 'react-router-dom';

// import {
//   Ch01_Layout,
//   Ch02_Layout,
// } from '../layouts/ChapterLayoutTemplate';
import {
  Ch01_Sec01_01,
  Ch01_Sec01_02,
  Ch01_Sec01_03,
  Ch01_Sec01_04,
  Ch01_Sec02_01,
  Ch01_Sec03_01,
  Ch01_Sec04_01,
  Ch01_Sec04_02,
  Ch01_Sec04_03,
  Ch01_Sec05_01,
  Ch01_Sec05_02,
  Ch01_Sec05_03,
  Ch01_Sec06_01,
  Ch01_Sec06_02,
  Ch01_Sec06_03,
  Ch01_Sec07_01,
  Ch01_Sec07_02,
  Ch01_Sec07_03,
  Ch01_Sec07_04,
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
  Ch02_Layout,
  Ch02_Sec01,
  Ch03_Layout,
  Ch04_Layout,
  RootLayout,
} from '../layouts';
import NotFound from '../views/NotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          // path: '', 等同 index: true,
          index: true,
          element: <Ch01_Layout />,
        },
        {
          path: 'ch01',
          element: <Ch01_Layout />,
          children: [
            {
              path: 'sec01',
              element: <Ch01_Sec01 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec01_01 />,
                },
                {
                  path: '02',
                  element: <Ch01_Sec01_02 />,
                },
                {
                  path: '03',
                  element: <Ch01_Sec01_03 />,
                },
                {
                  path: '04',
                  element: <Ch01_Sec01_04 />,
                },
              ],
            },
            {
              path: 'sec02',
              element: <Ch01_Sec02 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec02_01 />,
                },
              ],
            },
            {
              path: 'sec03',
              element: <Ch01_Sec03 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec03_01 />,
                },
              ],
            },
            {
              path: 'sec04',
              element: <Ch01_Sec04 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec04_01 />,
                },
                {
                  path: '02',
                  element: <Ch01_Sec04_02 />,
                },
                {
                  path: '03',
                  element: <Ch01_Sec04_03 />,
                },
              ],
            },
            {
              path: 'sec05',
              element: <Ch01_Sec05 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec05_01 />,
                },
                {
                  path: '02',
                  element: <Ch01_Sec05_02 />,
                },
                {
                  path: '03',
                  element: <Ch01_Sec05_03 />,
                },
              ],
            },
            {
              path: 'sec06',
              element: <Ch01_Sec06 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec06_01 />,
                },
                {
                  path: '02',
                  element: <Ch01_Sec06_02 />,
                },
                {
                  path: '03',
                  element: <Ch01_Sec06_03 />,
                },
              ],
            },
            {
              path: 'sec07',
              element: <Ch01_Sec07 />,
              children: [
                {
                  path: '01',
                  element: <Ch01_Sec07_01 />,
                },
                {
                  path: '02',
                  element: <Ch01_Sec07_02 />,
                },
                {
                  path: '03',
                  element: <Ch01_Sec07_03 />,
                },
                {
                  path: '04',
                  element: <Ch01_Sec07_04 />,
                },
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
              element: <Ch02_Sec01/>,
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
              element: <Ch02_Sec01/>,
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
              element: <Ch02_Sec01/>,
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
