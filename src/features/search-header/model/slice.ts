import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers,
});
