import {  useSearchSelect } from "../../model";
import { Dropdown } from "@/shared";
import { OPTIONS_DROPDOWNS } from "../../constant";
import { useChangeSort } from "../../hooks";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SelectSort = ({ apiKey, baseUrl }: Props) => {
  const { setSortingValue } = useChangeSort()
  const { sorting } = useSearchSelect();

  const handleChangeSort = (category: OptionsSelectType) => {
    setSortingValue({ category, apiKey, baseUrl });
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
