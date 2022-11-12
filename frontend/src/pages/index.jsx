import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Create} from "./";
export function Index() {
  const router = createBrowserRouter([
    {
      path: "/create",
      element: <Create />,
    },
  ]);
  return <div>
    <button onClick={router}>Press Me</button>
  </div>;
}
