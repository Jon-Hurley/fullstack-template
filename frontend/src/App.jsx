import {RouterProvider, createBrowserRouter, Routes, Route, BrowserRouter as Router} from "react-router-dom";

import Index from "./pages/index";
import Create from "./pages/Create";
import MyBlogs from "./pages/MyBlogs";
import Home from "./pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Index />,
//   },
// ]);
function App() {
  return (
  <>
    
    {/* <RouterProvider router={router}></RouterProvider> */}
    <Router>
    <Index/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path="/create" element = {<Create/>}></Route>
      </Routes>
      <Routes>
        <Route path="/myblogs" element = {<MyBlogs/>}></Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
