import { META_TAGS } from "../constants";

export const CONFIG_APP = {
  META_TAGS,
  BASE_BOOK_URL: 'https://www.googleapis.com/books/v1/volumes',
  GOOGLE_BOOK_KEY: process.env.BOOK_API_KEY ? process.env.BOOK_API_KEY : 'AIzaSyDB_D9kdaLO8ORm2Bz_QfpsIkArjTx2uFM',
  PROJECT_NAME: 'book-hunt',
  BACGROUND_HEADER: "/3041947.jpg",
} as const;
