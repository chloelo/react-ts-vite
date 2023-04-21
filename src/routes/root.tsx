import { createBrowserRouter } from 'react-router-dom';

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
  Ch02_Sec02,
  Ch02_Sec03,
  Ch02_Sec04,
  Ch02_Sec05,
  Ch02_Sec06,
  Ch02_Sec07,
  Ch03_Layout,
  Ch03_Sec01,
  Ch03_Sec02,
  Ch03_Sec03,
  Ch03_Sec04,
  Ch03_Sec05,
  Ch03_Sec06,
  Ch03_Sec07,
  Ch04_Layout,
  Ch04_Sec01,
  Ch04_Sec02,
  Ch04_Sec03,
  Ch04_Sec04,
  Ch04_Sec05,
  Ch04_Sec06,
  Ch04_Sec07,
  Ch04_Sec08,
  RootLayout,
} from '../layouts';
import NotFound from '../views/NotFound';
import TodoListUseReducer from '../views/TodoListUseReducer';
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
import {
  Ch02_Sec01_challenges,
  Ch02_Sec02_challenges,
  Ch02_Sec03_challenges,
  Ch02_Sec04_challenges,
  Ch02_Sec05_challenges,
  Ch02_Sec06_challenges,
  Ch02_Sec07_challenges,
} from './ch02Challenges';
import {
  Ch03_Sec01_challenges,
  Ch03_Sec02_challenges,
  Ch03_Sec03_challenges,
  Ch03_Sec04_challenges,
  Ch03_Sec05_challenges,
  Ch03_Sec06_challenges,
  Ch03_Sec07_challenges,
} from './ch03Challenges';
import {
  Ch04_Sec01_challenges,
  Ch04_Sec02_challenges,
  Ch04_Sec03_challenges,
  Ch04_Sec04_challenges,
  Ch04_Sec05_challenges,
  Ch04_Sec06_challenges,
  Ch04_Sec07_challenges,
  Ch04_Sec08_challenges,
} from './ch04Challenges';

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
              children: [...Ch01_Sec01_challenges],
            },
            {
              path: 'sec02',
              element: <Ch01_Sec02 />,
              children: [...Ch01_Sec02_challenges],
            },
            {
              path: 'sec03',
              element: <Ch01_Sec03 />,
              children: [...Ch01_Sec03_challenges],
            },
            {
              path: 'sec04',
              element: <Ch01_Sec04 />,
              children: [...Ch01_Sec04_challenges],
            },
            {
              path: 'sec05',
              element: <Ch01_Sec05 />,
              children: [...Ch01_Sec05_challenges],
            },
            {
              path: 'sec06',
              element: <Ch01_Sec06 />,
              children: [...Ch01_Sec06_challenges],
            },
            {
              path: 'sec07',
              element: <Ch01_Sec07 />,
              children: [...Ch01_Sec07_challenges],
            },
            {
              path: 'sec08',
              element: <Ch01_Sec08 />,
              children: [...Ch01_Sec08_challenges],
            },
          ],
        },
        {
          path: 'ch02',
          element: <Ch02_Layout />,
          children: [
            {
              path: '',
              element: <Ch02_Sec01 />,
            },
            {
              path: 'sec01',
              element: <Ch02_Sec01 />,
              children: [...Ch02_Sec01_challenges],
            },
            {
              path: 'sec02',
              element: <Ch02_Sec02 />,
              children: [...Ch02_Sec02_challenges],
            },
            {
              path: 'sec03',
              element: <Ch02_Sec03 />,
              children: [...Ch02_Sec03_challenges],
            },
            {
              path: 'sec04',
              element: <Ch02_Sec04 />,
              children: [...Ch02_Sec04_challenges],
            },
            {
              path: 'sec05',
              element: <Ch02_Sec05 />,
              children: [...Ch02_Sec05_challenges],
            },
            {
              path: 'sec06',
              element: <Ch02_Sec06 />,
              children: [...Ch02_Sec06_challenges],
            },
            {
              path: 'sec07',
              element: <Ch02_Sec07 />,
              children: [...Ch02_Sec07_challenges],
            },
          ],
        },
        {
          path: 'ch03',
          element: <Ch03_Layout />,
          children: [
            {
              path: '',
              element: <Ch03_Sec01 />,
            },
            {
              path: 'sec01',
              element: <Ch03_Sec01 />,
              children: [...Ch03_Sec01_challenges],
            },
            {
              path: 'sec02',
              element: <Ch03_Sec02 />,
              children: [...Ch03_Sec02_challenges],
            },
            {
              path: 'sec03',
              element: <Ch03_Sec03 />,
              children: [...Ch03_Sec03_challenges],
            },
            {
              path: 'sec04',
              element: <Ch03_Sec04 />,
              children: [...Ch03_Sec04_challenges],
            },
            {
              path: 'sec05',
              element: <Ch03_Sec05 />,
              children: [...Ch03_Sec05_challenges],
            },
            {
              path: 'sec06',
              element: <Ch03_Sec06 />,
              children: [...Ch03_Sec06_challenges],
            },
            {
              path: 'sec07',
              element: <Ch03_Sec07 />,
              children: [...Ch03_Sec07_challenges],
            },
          ],
        },
        {
          path: 'ch04',
          element: <Ch04_Layout />,
          children: [
            {
              path: '',
              element: <Ch04_Sec01 />,
            },
            {
              path: 'sec01',
              element: <Ch04_Sec01 />,
              children: [...Ch04_Sec01_challenges],
            },
            {
              path: 'sec02',
              element: <Ch04_Sec02 />,
              children: [...Ch04_Sec02_challenges],
            },
            {
              path: 'sec03',
              element: <Ch04_Sec03 />,
              children: [...Ch04_Sec03_challenges],
            },
            {
              path: 'sec04',
              element: <Ch04_Sec04 />,
              children: [...Ch04_Sec04_challenges],
            },
            {
              path: 'sec05',
              element: <Ch04_Sec05 />,
              children: [...Ch04_Sec05_challenges],
            },
            {
              path: 'sec06',
              element: <Ch04_Sec06 />,
              children: [...Ch04_Sec06_challenges],
            },
            {
              path: 'sec07',
              element: <Ch04_Sec07 />,
              children: [...Ch04_Sec07_challenges],
            },
            {
              path: 'sec08',
              element: <Ch04_Sec08 />,
              children: [...Ch04_Sec08_challenges],
            },
          ],
        },
        {
          path: 'use-reducer',
          element: <TodoListUseReducer />,
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
