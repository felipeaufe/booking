import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { store } from "@state/store";

import { App } from "./app";

import "react-toastify/dist/ReactToastify.min.css";
import "./assets/css/tokens.css";
import "./assets/css/react-modal.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
);
