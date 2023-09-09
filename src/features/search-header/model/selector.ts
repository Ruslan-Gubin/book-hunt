import {  useAppSelector } from "@/shared";
import { searchSlice } from "./slice";

const searchSelect = (state: RootState) => state.search;
export const searchAction = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const useSearchSelect = () => {
  return useAppSelector(searchSelect);
};






