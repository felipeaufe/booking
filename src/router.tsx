import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "@pages/home/home";
import Error404 from "@pages/404/404";
import { Place } from "@pages/place/place";
import { MyReservations } from "@pages/my-reservations/my-reservations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404/>
  },
  {
    path: "/place/:code",
    element: <Place />,
  },
  {
    path: "/my-reservations",
    element: <MyReservations />,
  },
]);
