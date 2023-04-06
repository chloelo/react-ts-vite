
import {
  createBrowserRouter,
} from "react-router-dom";

import Layout from "../components/Layout";
import ChapterLayout from "../components/ChapterLayout";
import Home from "../pages/Home";
import Chapters from "../pages/Chapters";
import Chapter from "../pages/Chapter";
import Page2 from "../pages/Page2";
import Page1 from "../pages/Page1";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          // path: '', 等同 index: true,
          index: true,
          element: <Home />
        },
        {
          path: 'chapters',
          element: <ChapterLayout />,
          children: [
            {
              path: '',
              element: <Chapters />
            },
            {
              path: ':id',
              element: <Chapter />
            },
          ]
        },
        {
          path: 'page1',
          element: <Page1 />
        },
        {
          path: 'page2',
          element: <Page2 />
        },
        {
          path: '*',
          element: <NotFound />
        },
      ],
    }
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
)
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
export default router