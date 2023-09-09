import { SingleBookDescription } from "../single-book-description/SingleBookDescription";
import styles from "./SinglBookInfo.module.scss";

type Props = {
  description: string;
  authors: string[];
  title: string;
  categories: string[];
};

const SinglBookInfo = ({ categories, authors, description, title }: Props) => {
  return (
    <div className={styles.book_info__container}>
      <ul className={styles.category_list}>
        {categories && categories.map((category, index) => (
          <li key={index} className={styles.category_item}>
            <p>{category}</p>
          </li>
        ))}
      </ul>
      <h2 className={styles.book_title}>{title ? title : ''}</h2>
      <ul className={styles.book_author_list}>
        {authors && authors.map((author) => (
          <li key={author} className={styles.book_author_item}>
            <span>{author}</span>
          </li>
        ))}
      </ul>
      <SingleBookDescription description={description ? description : ''} />
    </div>
  );
};

export { SinglBookInfo };
