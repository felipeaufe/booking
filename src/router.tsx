import { createBrowserRouter } from "react-router-dom";

import Error404 from "@pages/404/404";
import Home from "@pages/home/home";
import { MyReservations } from "@pages/my-reservations/my-reservations";
import { Place } from "@pages/place/place";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
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
