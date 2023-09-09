import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { SearchInitState } from "./types";

export const reducers = {
  setCategoryValue(
    state: SearchInitState,
    action: PayloadAction<{ value: OptionsSelectType }>
  ) {
    state.category = action.payload.value;
  },

  setSortingValue(
    state: SearchInitState,
    action: PayloadAction<{ value: OptionsSelectType }>
  ) {
    state.sorting = action.payload.value;
  },

  changeSearchValue(
    state: SearchInitState,
    action: PayloadAction<{ value: string }>
  ) {
    state.searchValue = action.payload.value;
  },
};
