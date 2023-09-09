import {  useSearcBooks } from "@/entities";
import { useCallback } from "react";

import styles from "./ButtonMore.module.scss";

type Props = {
  apiKey: string;
  baseBookUrl: string;
  disabled: boolean;
};

const ButtonMore = ({ apiKey, baseBookUrl, disabled }: Props) => {
  const { fetchSearchBooks } = useSearcBooks();


  const handleGetMoreBooks = useCallback(() => {
    fetchSearchBooks({
      apiKey,
      baseUrl: baseBookUrl,
      method: "add more",
    });
  },[]);

  return (
    <div className={styles.button_more__container}>
      <button
        disabled={disabled}
        className={
          disabled
            ? `${styles.button_more} ${styles.button_disabled}`
            : styles.button_more
        }
        onClick={handleGetMoreBooks}
      >
        load more
      </button>
    </div>
  );
};

export { ButtonMore };
