import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";
import { extraReducers } from "./extra-reducer";

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers,
  extraReducers,
});
