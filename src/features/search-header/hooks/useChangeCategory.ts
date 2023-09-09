import { fetchBooks } from "@/entities/book/model/thunk";
import { useAppDispatch } from "@/shared";
import { usePathname, useRouter } from "next/navigation";
import { searchAction } from "../model";

export const useChangeCategory = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const patchName = usePathname();

  const setCategoryValue = ({
    category,
    apiKey,
    baseUrl,
  }: {
    category: OptionsSelectType;
    apiKey: string;
    baseUrl: string;
  }) => {
    dispatch(searchAction.setCategoryValue({ value: category }));

    dispatch(
      fetchBooks({
        apiKey,
        baseUrl: baseUrl,
        category: category.value,
      })
    );

    if (patchName !== "/") {
      router.push("/");
    }
  };

  return {
    setCategoryValue,
  };
};
