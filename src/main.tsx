import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';

import { store } from '@state/store';
import { Header } from '@compositions/header/header';

import 'react-toastify/dist/ReactToastify.min.css';
import './assets/css/tokens.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router}/>
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
)
