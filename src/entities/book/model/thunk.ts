import { createAppThunk } from "@/shared";
import { BookApi } from "../api";
import { BookModel, FetchBooksThunkParams } from "./types";

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
  async (params: FetchBooksThunkParams, { rejectWithValue, getState }) => {
    const { apiKey, baseUrl, category,  sorting, maxResults=30, method } = params;
    
    const { category: categoryState, searchValue: searchState, sorting: sortState } = getState().search
    const { currentPage: pageValue } = getState().book

    const page = params.method === "add more" ? pageValue + 1 : 0; 
    const categoryValue = category ? category : categoryState.value;
    const sortingValue = sorting ? sorting : sortState.value;

    const response = await BookApi.getBooks<BookResponse | ErrorType>({ 
      apiKey,
      baseUrl,
      search: searchState,
      sorting: sortingValue,
      category: categoryValue,
      currentPage: page,
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

