"use client";
import { ChangeEventHandler, useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { InputSearch, useAppDispatch } from "@/shared";
import { useSearchActions, useSearchSelect } from "../../model";
import { fetchBooks } from "@/entities/book/model/thunk";

type Props = {
  apiKey: string;
  baseUrl: string;
};

const SearchBook = ({ apiKey, baseUrl }: Props) => {
  const { changeSearchValue } = useSearchActions();
  const { searchValue } = useSearchSelect();
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch()
  const router = useRouter();
  const patchName = usePathname();

  const handleSearchClick = () => {
    dispatch(fetchBooks({
      apiKey,
      baseUrl: baseUrl,
    }))

    if (patchName !== "/") {
      router.push("/");
    }
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
