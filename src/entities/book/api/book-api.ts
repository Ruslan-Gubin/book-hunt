import { fetchGet } from "@/shared";
import { BookModel, GetBooksReq } from "../model";

async function getSinglBook(baseApi: string, id: string): Promise<BookModel> {
  const response = await fetch(`${baseApi}/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error(`Failed to fetch book ${id}`);

  return await response.json();
}

const getBooks = <T>({
  apiKey,
  search,
  baseUrl,
  maxResults = 30,
  sorting = "relevance",
  category = "",
  currentPage = 0,
}: GetBooksReq): Promise<T> => {
  let categorySortingParameter = "";

  if (category && category !== "all") {
    categorySortingParameter = "+subject:" + category;
  }

  let currentPageParameter = "";

  if (currentPage) {
    currentPageParameter = "&startIndex=" + (currentPage + 1) * 30;
  }

  let searchValue = search;

  if (searchValue.length === 0 && category === "all") {
    searchValue = "a";
  }

  const searchParams = `?q=${searchValue}`;
  const sortParams = `&orderBy=${sorting}`;
  const maxResultsParams = `&maxResults=${maxResults}`;
  const keyParams = `&key=${apiKey}`;

  const resultParams = `${searchParams}${categorySortingParameter}${maxResultsParams}${sortParams}${currentPageParameter}${keyParams}`;

  return fetchGet(baseUrl, resultParams);
};

export const BookApi = {
  getSinglBook,
  getBooks,
};
