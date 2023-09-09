import { fetchBooks } from "@/entities/book/model/thunk";
import { useAppDispatch } from "@/shared";
import { usePathname, useRouter } from "next/navigation";
import { searchAction } from "../model";

export const useChangeSort = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const patchName = usePathname();

  const setSortingValue = ({
    category,
    apiKey,
    baseUrl,
  }: {
    category: OptionsSelectType;
    apiKey: string;
    baseUrl: string;
  }) => {
    dispatch(searchAction.setSortingValue({ value: category }));

    dispatch(
      fetchBooks({
        apiKey,
        baseUrl: baseUrl,
        sorting: category.value,
      })
    );

    if (patchName !== "/") {
      router.push("/");
    }
  };

  return {
    setSortingValue,
  };
};