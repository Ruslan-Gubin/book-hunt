import { ContentContainer, ImageMain } from "@/shared";
import type { ReactNode } from "react";
import styles from "./LayoutHeader.module.scss";

type Props = {
  children: ReactNode;
  title: string;
  backgroundSrc: string;
};

const LayoutHeader = ({ children, title, backgroundSrc }: Props) => {
  return (
    <header className={styles.layout_header}>
      <div className={styles.layout_header__background}>
        <ImageMain
          width={"100%"}
          height={"100%"}
          src={backgroundSrc}
          priority={true}
          alt={"Background main page"}
        />
      </div>
      <ContentContainer>
        <h1 className={styles.layout_header__title}>{title}</h1>
        {children}
      </ContentContainer>
    </header>
  );
};

export { LayoutHeader };
