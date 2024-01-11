import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/home/home";
import Error404 from "./pages/error-404/error-404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404/>
  },
]);
