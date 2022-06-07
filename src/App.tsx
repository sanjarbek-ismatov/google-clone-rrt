import React from "react";
import Header from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { asyncThunk } from "./state/fetcher";
const App = () => {
  const state = useSelector((state) => state);
  const dispatch: any = useDispatch();
  return (
    <>
      <Header />
      <button onClick={() => dispatch(thunk("youtube"))}>Fetch</button>
    </>
  );
};
export default App;
