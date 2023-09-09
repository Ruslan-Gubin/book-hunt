import { useSearchSelect } from "../../model";
import { OPTIONS_DROPDOWNS } from "../../constant";
import { useChangeCategory } from "../../hooks";
import { Dropdown } from "@/shared";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SelectCategory = ({ apiKey, baseUrl }: Props) => {
  const { setCategoryValue } = useChangeCategory();
  const { category } = useSearchSelect();

  const handleChangeCategory = (category: OptionsSelectType) => {
    setCategoryValue({ category, apiKey, baseUrl });
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
