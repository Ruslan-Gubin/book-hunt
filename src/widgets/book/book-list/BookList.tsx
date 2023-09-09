"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useBookSelect } from "@/entities/book";
import { BookItem } from "../book-item/BookItem";
import { Loader, useAppDispatch } from "@/shared";
import { ButtonMore } from "@/features";
import { fetchBooks } from "@/entities/book/model/thunk";
import { BookError } from "../book-error/BookError";

import styles from "./BookList.module.scss";

const BookList = ({
  apiKey,
  baseBookUrl,
}: {
  apiKey: string;
  baseBookUrl: string;
}) => {
  const { error, loading, books, totalItems } = useBookSelect();
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (loading) return;
    dispatch(fetchBooks({
      apiKey,
      baseUrl: baseBookUrl,
    }))
  }, []);

  if (error) {
    return <BookError text={error} />;
  }

  if (books.length === 0) {
    return <div>No found books...</div>;
  }

  return (
    <section className={styles.book_list}>
      <span className={styles.book_total__text}>
        Fount {totalItems ? totalItems : "0"} results
      </span>
      <ul className={styles.book_list}>
        {books.length > 0 &&
          books.map((book, index) => (
            <Link href={`book/${book.id}`} key={`${book.id}${index}`}>
            {book.volumeInfo &&
                <BookItem
                imageSrc={book.volumeInfo.imageLinks?.thumbnail}
                authors={book.volumeInfo.authors}
                categories={book.volumeInfo.categories}
                title={book.volumeInfo.title}
                imgAlt={`Image id ${book.id}`}
                priority={index === 0}
                />
              }
                </Link>
          ))}
      </ul>
      {loading && <Loader />}
          <ButtonMore
            disabled={books.length % 30 !== 0}
            apiKey={apiKey}
            baseBookUrl={baseBookUrl}
          />
    </section>
  );
};

export { BookList };
