import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.min.css';
import './assets/css/tokens.css';
import { App } from './app';
import { store } from '@state/store';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
)
