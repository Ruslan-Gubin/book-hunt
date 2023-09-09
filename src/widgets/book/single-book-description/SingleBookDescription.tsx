import styles from "./SingleBookDescription.module.scss";

const SingleBookDescription = ({ description }: { description: string }) => {
  return (
    <div className={styles.book_description__container}>
      <p className={styles.book_description}>{description}</p>
    </div>
  );
};

export { SingleBookDescription };
