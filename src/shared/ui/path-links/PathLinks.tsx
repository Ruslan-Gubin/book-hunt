import { ContentContainer } from "../content-container/ContentContainer";
import Link from "next/link";

import styles from "./PathLinks.module.scss";

const PathLinks = ({ path }: { path: string }) => {
  return (
    <ContentContainer>
      <div className={styles.link_list}>
        <Link href={"/"} className={styles.link_item}>
          Home /
        </Link>
        <span className={styles.link_item}> {path}</span>
      </div>
    </ContentContainer>
  );
};

export { PathLinks };
