/* eslint-disable @typescript-eslint/no-explicit-any */
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { RootState } from '@state/store'
import { rootReducer } from '@state/root-reducer'

type OptionalRootState = Partial<RootState>;

export const getInitialDate = (data: any) => {
  const initial: RootState = {
    places: {} as any,
    bookings: {} as any,
    ...data
  };

  return initial;
}

export const renderRedux = (
  children: React.ReactNode,
  initialState: OptionalRootState,
) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: getInitialDate(initialState)
  })

  return {
    ...render(<Provider store={store}>{children}</Provider>, {}),
    store,
  };
}