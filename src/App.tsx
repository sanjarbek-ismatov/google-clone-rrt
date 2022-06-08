import React from "react";
import Header from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { asyncThunk } from "./state/fetcher";
import MainComponent from "./components/mainComponent";
const App = () => {
  const state = useSelector((state) => state);
  const dispatch: any = useDispatch();
  return (
    <>
      <Header />
      <MainComponent />
    </>
  );
};
export default App;
