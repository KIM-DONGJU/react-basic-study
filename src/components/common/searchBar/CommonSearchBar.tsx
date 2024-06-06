import { useSetRecoilState } from 'recoil';
import { useDebounce } from '@toss/react';

import { searchState } from '@/store/atoms/searchState';

import styles from './CommonSearchBar.module.scss';
import { pageState } from '@/store/atoms/pageState';

export default function CommonSearchBar() {
  const setSearch = useSetRecoilState(searchState);
  const setPage = useSetRecoilState(pageState);

  const onChange = useDebounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    if (event.target.value === '') {
      setSearch('Korea');
      return;
    }

    setSearch(event.target.value);
  }, 500);

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          className={styles.searchBar__search__input}
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
          onChange={onChange}
        />
        <img
          src="src/assets/icons/icon-search.svg"
          alt="search icon"
        />
      </div>
    </div>
  )
}
