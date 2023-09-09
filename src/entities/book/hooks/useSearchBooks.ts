import { useSearchSelect } from "@/features";
import { useAppDispatch } from "@/shared";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { FetchSearchBooksParams, useBookSelect } from "../model";
import { fetchBooks } from "../model/thunk";

export const useSearcBooks = () => {
  const { currentPage } = useBookSelect();
  const { category, searchValue, sorting } = useSearchSelect();
  const router = useRouter();
  const patchName = usePathname();
  const dispatch = useAppDispatch();


  const fetchSearchBooks = useCallback((params: FetchSearchBooksParams) => {

    const pageValue = params.method === "add more" ? currentPage + 1 : 0;
    const categoryValue = params.categoryValue ? params.categoryValue : category.value;
    const sortingValue = params.sortingValue ? params.sortingValue : sorting.value;

    dispatch(
      fetchBooks({
        apiKey: params.apiKey,
        baseUrl: params.baseUrl,
        category: categoryValue,
        currentPage: pageValue,
        search: searchValue,
        sorting: sortingValue,
        method: params.method,
      })
    );

    if (patchName !== "/") {
      router.push("/");
    }
  },[]);

  return { fetchSearchBooks };
};
