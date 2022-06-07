import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import axios from "axios";
const log = createLogger();
const initialState: initialStateType = {
  loading: true,
  data: {},
  error: "",
};
type initialStateType = {
  loading: boolean;
  data: {};
  error: string;
};
const fetcherSlice = createSlice({
  name: "fetchdata",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      asyncThunk.fulfilled,
      (state: initialStateType, action: any) => {
        (state.loading = false), (state.data = action.payload);
      }
    );
    builder.addCase(asyncThunk.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message || "Error");
    });
  },
});
export const asyncThunk = createAsyncThunk("fetch", async (query: string) => {
  const data = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyBbFGoK91L85xUu9ONymejA1ecQPAVN8gM&cx=344518b235096fb90&q=${query}`
  );
  return data;
});
export const store = configureStore({
  reducer: {
    fetcher: fetcherSlice.reducer,
  },
  middleware: (def) => def().concat(log),
});
store.subscribe(() => console.log(store.getState()));
