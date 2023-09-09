import { createAppThunk } from "@/shared";
import { BookApi } from "../api";
import { BookModel, GetBooksReq } from "./types";

type BookResponse = {
  kind: string;
  totalItems: number;
  items: BookModel[];
};

type ErrorType = {
  error: {
    message: string;
  };
};

export const fetchBooks = createAppThunk(
  "book/fetchBooks",
  async (params: GetBooksReq, { rejectWithValue, getState }) => {
    const { apiKey, baseUrl, category, currentPage, search, sorting, maxResults, method } = params;
    
    const { category: categoryState, searchValue: searchState, sorting: sortState } = getState().search

    const response = await BookApi.getBooks<BookResponse | ErrorType>({
      apiKey,
      baseUrl,
      search,
      sorting,
      category,
      currentPage,
      maxResults,
    });

    if ("error" in response) {
      return rejectWithValue(response.error.message);
    }

    if (response.totalItems === 0 || response.items.length === 0) {
      return rejectWithValue('books not found');
    }

    return { data: response, method };
  }
);

