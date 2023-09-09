import { META_TAGS } from "../constants";

export const CONFIG_APP = {
  META_TAGS,
  BASE_BOOK_URL: 'https://www.googleapis.com/books/v1/volumes',
  GOOGLE_BOOK_KEY: process.env.BOOK_API_KEY,
  PROJECT_NAME: 'book-hunt',
  BACGROUND_HEADER: "/3041947.jpg",
} as const;
