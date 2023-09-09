import { usePathname, useRouter } from "next/navigation";
import { useSearchActions, useSearchSelect } from "../../model";
import { Dropdown, useAppDispatch } from "@/shared";
import { OPTIONS_DROPDOWNS } from "../../constant";
import { fetchBooks } from "@/entities/book/model/thunk";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SelectSort = ({ apiKey, baseUrl }: Props) => {
  const { setSortingValue } = useSearchActions();
  const { sorting } = useSearchSelect();
  const dispatch = useAppDispatch()
  const router = useRouter();
  const patchName = usePathname();

  const handleChangeSort = (category: OptionsSelectType) => {
    setSortingValue(category);
    dispatch(fetchBooks({
      apiKey,
      baseUrl: baseUrl,
      sorting: category.value,
    }))

    if (patchName !== "/") {
      router.push("/");
    }
  };

  return (
    <Dropdown
      label={"Sorting"}
      onSelect={handleChangeSort}
      options={OPTIONS_DROPDOWNS.optionsSort}
      selected={sorting}
      width={300}
    />
  );
};

export { SelectSort };
