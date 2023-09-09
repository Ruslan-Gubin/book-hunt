"use client";
import { ChangeEventHandler, useCallback, useEffect, useRef } from "react";
import { InputSearch } from "@/shared";
import { useSearchSelect } from "../../model";
import { useFetchBookKeyword } from "../../hooks";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SearchBook = ({ apiKey, baseUrl }: Props) => {
  const { fetchSearchKeyword, setChangeSearchValue } = useFetchBookKeyword()
  const { searchValue } = useSearchSelect();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    fetchSearchKeyword({ apiKey, baseUrl })
  };

  const checkPressEnter = useCallback(
    (event: KeyboardEvent) => {
      const checkKeyEnter = event.key === "Enter";

      if (!checkKeyEnter) return;
      handleSearchClick();
    },
    [searchValue]
  );

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setChangeSearchValue(event.target.value);
  };

  useEffect(() => {
    if (!inputRef.current) return;

    const node = inputRef.current;

    node.addEventListener("keydown", checkPressEnter);

    return () => {
      node.removeEventListener("keydown", checkPressEnter);
    };
  }, [checkPressEnter]);

  return (
    <div>
      <InputSearch
        searchClick={handleSearchClick}
        placeholder="search book"
        inputRef={inputRef}
        value={searchValue}
        onChange={handleChangeValue}
      />
    </div>
  );
};

export { SearchBook };
