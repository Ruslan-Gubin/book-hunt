import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchBooks } from "./thunk";
import { BookInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<BookInitState>
) => {
  builder
    .addCase(fetchBooks.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    .addCase(fetchBooks.rejected, (state, action) => {
      state.books = [];
      (state.totalItems = 0), (state.currentPage = 0), (state.loading = false);
      if (action.payload) {
        state.error = action.payload;
      }
    })
    .addCase(fetchBooks.fulfilled, (state, action) => {
      const { data, method } = action.payload;
      const { items, totalItems } = data; 

      if (method === "add more") {
        state.books.push(...items.filter((book) => book.volumeInfo.imageLinks));
        state.currentPage = state.currentPage + 1;
      } else {
        state.books = [];
        state.books = items.filter((book) => book.volumeInfo.imageLinks);
        state.totalItems = totalItems;
        state.currentPage = 0;
      }

      state.loading = false;
      state.error = null;
    });
};
