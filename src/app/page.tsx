import { CONFIG_APP } from '@/shared';
import styles from './styles/pages/Home.module.scss';
import { BookList } from '@/widgets';


export default function Home() {
  const apiKey = CONFIG_APP.GOOGLE_BOOK_KEY!;
  const baseBookUrl = CONFIG_APP.BASE_BOOK_URL

  return (
    <main className={styles.main}>
     <BookList apiKey={apiKey} baseBookUrl={baseBookUrl} />
    </main>
  )
}
