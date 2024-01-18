import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { Footer } from "@components/footer/footer";
import { Header } from "@compositions/header/header";

import { bookingsActions } from "@state/bookings/saga";
import { placesActions } from "@state/places/saga";
import { useDispatch } from "@state/store";

import { router } from "./router";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: placesActions.FETCH_REQUEST });
    dispatch({ type: bookingsActions.FETCH_REQUEST });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
