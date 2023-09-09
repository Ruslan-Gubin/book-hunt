import type { InputHTMLAttributes, LegacyRef } from "react";
import { SearchSvg } from "../search-svg/SearchSvg";

import styles from "./InputSearch.module.scss";

interface InputSearch extends InputHTMLAttributes<HTMLInputElement> {
  inputRef: LegacyRef<HTMLInputElement>;
  searchClick: () => void;
}

const InputSearch = (props: InputSearch) => {
  const { searchClick, inputRef, ...rest } = props;

  return (
    <div className={styles.input_search__container}>
      <input ref={inputRef} className={styles.input_search} {...rest} />
      <SearchSvg onClick={searchClick} className={styles.input_search__svg} />
    </div>
  );
};

InputSearch.displayName = "InputSearch";

export { InputSearch };
