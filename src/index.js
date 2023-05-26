import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const layout = document.getElementById("root");
const root = createRoot(layout);

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
