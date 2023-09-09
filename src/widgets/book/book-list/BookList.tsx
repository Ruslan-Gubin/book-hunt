"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useBookSelect, useSearcBooks } from "@/entities/book";
import { BookItem } from "../book-item/BookItem";
import { Loader } from "@/shared";
import { ButtonMore } from "@/features";

import styles from "./BookList.module.scss";

const BookList = ({
  apiKey,
  baseBookUrl,
}: {
  apiKey: string;
  baseBookUrl: string;
}) => {
  const { error, loading, books, totalItems } = useBookSelect();
  const { fetchSearchBooks } = useSearcBooks();

  useEffect(() => {
    if (loading) return;
    fetchSearchBooks({ apiKey, baseUrl: baseBookUrl });
  }, []);

  if (error) {
    return <div>{error}</div>;
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
              <BookItem
                imageSrc={book.volumeInfo.imageLinks?.thumbnail}
                authors={book.volumeInfo.authors}
                categories={book.volumeInfo.categories}
                title={book.volumeInfo.title}
                imgAlt={`Image id ${book.id}`}
                priority={index === 0}
              />
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
