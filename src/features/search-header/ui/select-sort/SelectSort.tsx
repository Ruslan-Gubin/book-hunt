import { useSearchActions, useSearchSelect } from "../../model";
import { Dropdown } from "@/shared";
import { OPTIONS_DROPDOWNS } from "../../constant";
import { useSearcBooks } from "@/entities/book/hooks/useSearchBooks";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SelectSort = ({ apiKey, baseUrl }: Props) => {
  const { setSortingValue } = useSearchActions();
  const { sorting } = useSearchSelect();
  const { fetchSearchBooks } = useSearcBooks();

  const handleChangeSort = (category: OptionsSelectType) => {
    setSortingValue(category);
    fetchSearchBooks({ apiKey, baseUrl, sortingValue: category.value });
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
