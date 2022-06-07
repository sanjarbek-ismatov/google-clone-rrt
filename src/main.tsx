import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/fetcher";
ReactDOM.createRoot(document.getElementsByClassName("main")[0]!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
