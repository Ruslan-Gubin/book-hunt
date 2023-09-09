'use client'
import { SearchBook, SelectCategory, SelectSort } from '@/features';
import styles from './SearchHeaderSection.module.scss';

type Props = {
  apiKey: string;
  baseUrl: string;
}

const SearchHeaderSection = ({ apiKey, baseUrl }: Props) => {

  return (
    <section  className={styles.search_header}>
      <SearchBook apiKey={apiKey} baseUrl={baseUrl} />
      <div className={styles.search_selects}>
      <SelectCategory apiKey={apiKey} baseUrl={baseUrl} />
      <div className={styles.separator}></div>
      <SelectSort apiKey={apiKey} baseUrl={baseUrl} />
      </div>
    </section>
  );
};

export  {SearchHeaderSection};