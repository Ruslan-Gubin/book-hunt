import { BOOK_IMAGES, ImageMain } from "@/shared";
import { SinglBookInfo } from "../singl-book-info/SinglBookInfo";

import styles from "./SingleBook.module.scss";

type Props = {
  description: string;
  authors: string[];
  title: string;
  imageSrc: string;
  id: string;
  categories: string[];
};

const SingleBook = (props: Props) => {
  const { authors, description, id, imageSrc, title, categories } = props;

  return (
    <div className={styles.book}>
      <div className={styles.book_left__side}>
        <ImageMain
        className={styles.book_image}
        src={imageSrc ? imageSrc : BOOK_IMAGES.noImage}
        alt={`book image id: ${id}`}
        height={"450px"}
        width={"300px"}
        priority={true}
        />
      </div>

      <div className={styles.book_right__side}>
        <SinglBookInfo
          authors={authors}
          categories={categories}
          description={description}
          title={title}
        />
      </div>
    </div>
  );
};

export { SingleBook };
