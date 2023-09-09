import { useAppDispatch, useAppSelector } from "@/shared";
import { searchSlice } from "./slice";

const searchSelect = (state: RootState) => state.search;
const searchAction = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const useSearchSelect = () => {
  return useAppSelector(searchSelect);
};

export const useSearchActions = () => {
  const dispatch = useAppDispatch();

  return {
    setCategoryValue: (value: OptionsSelectType) =>
      dispatch(searchAction.setCategoryValue({ value })),
    setSortingValue: (value: OptionsSelectType) =>
      dispatch(searchAction.setSortingValue({ value })),
    changeSearchValue: (value: string) =>
      dispatch(searchAction.changeSearchValue({ value })),
  };
};


