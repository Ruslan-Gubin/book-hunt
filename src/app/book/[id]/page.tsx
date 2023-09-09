import { BookApi } from "@/entities/book/api";
import {  CONFIG_APP, PathLinks } from "@/shared";
import { SingleBook } from "@/widgets";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};


export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const book = await BookApi.getSinglBook(CONFIG_APP.BASE_BOOK_URL, id);

  return {
    title: book.volumeInfo.title,
  };
}

export default async function Book({ params: { id } }: Props) {
  const book = await BookApi.getSinglBook(CONFIG_APP.BASE_BOOK_URL, id);

  return (
    <>
      <PathLinks path={book.volumeInfo.title} />
      <SingleBook
        authors={book.volumeInfo.authors}
        categories={book.volumeInfo.categories}
        description={book.volumeInfo.description}
        id={book.id}
        imageSrc={book.volumeInfo.imageLinks?.thumbnail}
        title={book.volumeInfo.title}
      />
    </>
  );
}
