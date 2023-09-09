import { OPTIONS_DROPDOWNS } from "../constant";
import { SearchInitState } from "./types";


const initialState: SearchInitState = {
  category: OPTIONS_DROPDOWNS.optionsCategory[0],  
  searchValue: "",
  sorting: OPTIONS_DROPDOWNS.optionsSort[0],
};

export { initialState };
