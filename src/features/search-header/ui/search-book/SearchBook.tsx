"use client";
import { ChangeEventHandler, useCallback, useEffect, useRef } from "react";
import { useSearcBooks } from "@/entities";
import { InputSearch } from "@/shared";
import { useSearchActions, useSearchSelect } from "../../model";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SearchBook = ({ apiKey, baseUrl }: Props) => {
  const { changeSearchValue } = useSearchActions();
  const { searchValue } = useSearchSelect();
  const { fetchSearchBooks } = useSearcBooks();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    changeSearchValue("");
    fetchSearchBooks({ apiKey, baseUrl });
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
    changeSearchValue(event.target.value);
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
