import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'

import './assets/css/tokens.css';
import { Provider } from 'react-redux';
import { store } from '@state/store';
import { Header } from '@compositions/header/header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
