import { useAppSelector } from "@/shared";
import { bookSlice } from "./slice";

const bookSelect = (state: RootState) => state.book;
export const bookReducer = bookSlice.reducer;

export const useBookSelect = () => {
  return useAppSelector(bookSelect);
};
