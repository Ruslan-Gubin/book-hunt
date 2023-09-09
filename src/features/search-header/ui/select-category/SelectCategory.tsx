import { useSearchActions, useSearchSelect } from "../../model";
import { Dropdown, useAppDispatch } from "@/shared";
import { OPTIONS_DROPDOWNS } from "../../constant";
import { usePathname, useRouter } from "next/navigation";
import { fetchBooks } from "@/entities/book/model/thunk";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SelectCategory = ({ apiKey, baseUrl }: Props) => {
  const { setCategoryValue } = useSearchActions();
  const { category } = useSearchSelect();
  const dispatch = useAppDispatch()
  const router = useRouter();
  const patchName = usePathname();

  const handleChangeCategory = (category: OptionsSelectType) => {
    setCategoryValue(category);
    dispatch(fetchBooks({
      apiKey,
      baseUrl: baseUrl,
      category: category.value,
    }))
    if (patchName !== "/") {
      router.push("/");
    }
  };

  return (
    <>
      <Dropdown
        label={"Categoryes"}
        onSelect={handleChangeCategory}
        options={OPTIONS_DROPDOWNS.optionsCategory}
        selected={category}
        width={300}
      />
    </>
  );
};

export { SelectCategory };
