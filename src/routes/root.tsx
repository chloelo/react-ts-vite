import { createBrowserRouter } from 'react-router-dom';

import {
  Ch01_Layout,
  Ch01_Sec01_Layout,
  Ch01_Sec02_Layout,
  Ch01_Sec03_Layout,
  Ch01_Sec04_Layout,
  Ch02_Layout,
  Ch02_Sec01_Layout,
  RootLayout,
} from '../layouts';
import {
  Ch01_Sec01_01,
  Ch01_Sec01_02,
  Ch01_Sec01_03,
  Ch01_Sec01_04,
  Ch01_Sec02_01,
  Ch01_Sec03_01,
  Ch01_Sec04_01,
} from '../views/chapters';
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
              element: <Ch01_Sec01_Layout />,
              children: [
                {
                  path: '',
                  element: <Ch01_Sec01_01 />,
                },
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
              element: <Ch01_Sec02_Layout />,
              children: [
                {
                  path: '',
                  element: <Ch01_Sec02_01 />,
                },
                {
                  path: '01',
                  element: <Ch01_Sec02_01 />,
                },
              ],
            },
            {
              path: 'sec03',
              element: <Ch01_Sec03_Layout />,
              children: [
                {
                  path: '',
                  element: <Ch01_Sec03_01 />,
                },
                {
                  path: '01',
                  element: <Ch01_Sec03_01 />,
                },
              ],
            },
            {
              path: 'sec04',
              element: <Ch01_Sec04_Layout />,
              children: [
                {
                  path: '',
                  element: <Ch01_Sec04_01 />,
                },
                {
                  path: '01',
                  element: <Ch01_Sec04_01 />,
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
              element: <Ch02_Sec01_Layout />,
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
