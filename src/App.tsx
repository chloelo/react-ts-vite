import './App.scss';

import { RouterProvider } from 'react-router-dom';

import router from './routes/root';

const App = () => {
  
  return (<>
    <RouterProvider router={router} />
  </>)
}
export default App

{/* <Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="page1" element={<Page1 />} />
  <Route path="page2" element={<Page2 />} />
  <Route path="*" element={<NotFound />} />
  <Route path="/chapters">
    <Route path=":id" element={<Chapter />} />
  </Route>
  <Route path="chapters/:id" element={<Chapter />} />
</Route>
</Routes> */}

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route index element={<Home />}></Route>
//       {/* <Route path="chapters" element={<Chapters />} />
//        */}
//       <Route path="chapters" element={<ChapterLayout />}>
//         <Route index element={<Chapters />} />
//         <Route path=":id" element={<Chapter />} />
//       </Route>
//       <Route path="page1" element={<Page1 />} />
//       <Route path="page2" element={<Page2 />} />
//       <Route path="*" element={<NotFound />} />
//     </Route>
//   )
// )