import type { ReactNode } from "react";

import styles from "./ContentContainer.module.scss";

const ContentContainer = ({children}: {children: ReactNode}) => {

  return (
    <div className={styles.content_container}>
      {children}
    </div>
  );
};

export { ContentContainer };