import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/fetcher";
import MainComponent from "./components/mainComponent";
ReactDOM.createRoot(document.getElementsByClassName("main")[0]!).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="main" element={<MainComponent />} />
      <Route path="*" element /> */}
    </Routes>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
