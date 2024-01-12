import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { RootState } from '@state/store'
import { rootReducer } from '@state/root-reducer'


export const renderRedux = (
  children: React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialState: RootState,
) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  })

  return {
    ...render(<Provider store={store}>{children}</Provider>, {}),
    store,
  };
}