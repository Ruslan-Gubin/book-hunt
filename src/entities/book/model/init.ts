import { BookInitState } from "./types";

const initialState: BookInitState = {
  books: [],
  loading: false,
  error: null,
  totalItems: 0,
  currentPage: 0,
};

export { initialState };
