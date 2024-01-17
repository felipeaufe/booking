import { router } from './router.tsx';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from '@state/store';
import { Header } from '@compositions/header/header';
import { placesActions } from '@state/places/saga.ts';
import { useEffect } from 'react';
import { bookingsActions } from '@state/bookings/saga.ts';
import { Footer } from '@components/footer/footer.tsx';

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
