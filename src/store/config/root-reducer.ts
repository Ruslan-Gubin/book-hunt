"use client";
import { bookReducer } from "@/entities";
import { searchReducer } from "@/features";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  book: bookReducer,
  search: searchReducer,
});
