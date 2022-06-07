import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
const initialState: initialStateType = {
  loading: true,
  data: [],
  error: "",
};
type initialStateType = {
  loading: boolean;
  data: [];
  error: string;
};
const fetcherSlice = createSlice({
  name: "fetchdata",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncThunk.pending, (state) => {
      (state.loading = true), (state.data = []), (state.error = "");
    });
    builder.addCase(
      asyncThunk.fulfilled,
      (state: initialStateType, action: any) => {
        (state.loading = false),
          (state.data = action.payload),
          (state.error = "");
      }
    );
    builder.addCase(asyncThunk.rejected, (state, action) => {
      (state.loading = false),
        (state.data = []),
        (state.error = action.error.message || "Error");
    });
  },
});
export const asyncThunk = createAsyncThunk(
  "user/fetch",
  async (query: string) => {
    const data = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBbFGoK91L85xUu9ONymejA1ecQPAVN8gM&cx=344518b235096fb90&q=${query}`
    );
    return data;
  }
);

const store = configureStore({
  reducer: {
    fetcher: fetcherSlice.reducer,
  },
});
module.exports;
