import { useSearchActions, useSearchSelect } from "../../model";
import { Dropdown } from "@/shared";
import { OPTIONS_DROPDOWNS } from "../../constant";
import { useSearcBooks } from "@/entities";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SelectCategory = ({ apiKey, baseUrl }: Props) => {
  const { setCategoryValue } = useSearchActions();
  const { category } = useSearchSelect();
  const { fetchSearchBooks } = useSearcBooks();

  const handleChangeCategory = (category: OptionsSelectType) => {
    setCategoryValue(category);
    fetchSearchBooks({ apiKey, baseUrl, categoryValue: category.value });
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
