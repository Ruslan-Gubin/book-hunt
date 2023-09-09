import { fetchBooks } from "@/entities/book/model/thunk";
import { useAppDispatch } from "@/shared";
import { usePathname, useRouter } from "next/navigation";
import { searchAction } from "../model";

export const useFetchBookKeyword = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const patchName = usePathname();

  const fetchSearchKeyword = ({
    apiKey,
    baseUrl,
  }: {
    apiKey: string;
    baseUrl: string;
  }) => {

    dispatch(fetchBooks({
      apiKey,
      baseUrl: baseUrl,
    }))

    if (patchName !== "/") {
      router.push("/");
    }
  };

  const setChangeSearchValue = (value: string) => {
    dispatch(searchAction.changeSearchValue({ value }))
  }

  return {
    fetchSearchKeyword,
    setChangeSearchValue
  };
};