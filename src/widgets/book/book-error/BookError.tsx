import styles from "./BookError.module.scss";

const BookError = ({ text }: { text: string }) => {
  return (
    <div className={styles.error}>
      <div className={styles.error_text__container}>
        <h2 className={styles.error_title}>Error</h2>
        <span className={styles.error_text}>{text}</span>
      </div>
    </div>
  );
};

export { BookError };
