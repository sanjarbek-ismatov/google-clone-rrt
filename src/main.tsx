import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/fetcher";
import SearchResult from "./components/searchResult";
ReactDOM.createRoot(document.getElementsByClassName("main")[0]!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/result" element={<SearchResult />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
