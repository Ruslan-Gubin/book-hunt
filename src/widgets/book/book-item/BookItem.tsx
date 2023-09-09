import { BookModel } from "@/entities/book";

import styles from "./BookItem.module.scss";
import { BOOK_IMAGES, ImageMain } from "@/shared";

type Props = {
  imageSrc: string;
  priority: boolean;
  categories: string[];
  title: string;
  authors: string[];
  imgAlt: string;
}

const BookItem = (props: Props) => {
  const { imageSrc, priority, imgAlt, authors, categories, title } = props

  return (
    <li className={styles.book}>
      <ImageMain
        className={styles.book_image}
        alt={imgAlt}
        src={imageSrc ?? BOOK_IMAGES.noImage}
        priority={priority}
      />
      <span className={styles.book_category}>{categories ?? ''}</span>
      <span className={styles.book__title}>{title ?? ''}</span>
      <ul className={styles.book_authors__list}>
        {authors &&
          authors.map((author, index) => (
            <li key={`${index} ${index}`} className={styles.book_authors__item}>
              <span>{author}</span>
            </li>
          ))}
      </ul>
    </li>
  );
};

export { BookItem };
