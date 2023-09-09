import { fetchBooks } from "@/entities/book/model/thunk";
import { useAppDispatch } from "@/shared";

import styles from "./ButtonMore.module.scss";

type Props = {
  apiKey: string;
  baseBookUrl: string;
  disabled: boolean;
};

const ButtonMore = ({ apiKey, baseBookUrl, disabled }: Props) => {
  const dispatch = useAppDispatch()

  const handleGetMoreBooks = () => {
    dispatch(fetchBooks({
      apiKey,
      baseUrl: baseBookUrl,
      method: 'add more',
    }))
  };

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
