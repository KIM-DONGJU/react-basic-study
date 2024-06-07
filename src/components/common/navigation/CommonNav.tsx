import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Link, useLocation } from 'react-router-dom';

import { pageState } from '@/store/atoms/pageState';
import { searchState } from '@/store/atoms/searchState';

import navJson from './nav.json';
import styles from './CommonNav.module.scss';

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

export default function CommonNav() {
  const location = useLocation();
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);
  const setPage = useSetRecoilState(pageState);
  const setSearch = useSetRecoilState(searchState);

  useEffect(() => {
    navigation.forEach((nav) => {
      nav.isActive = false;

      if (nav.path === location.pathname || location.pathname.includes(nav.path)) {
        nav.isActive = true;
        setSearch(nav.searchValue);
        setPage(1);
      }
    });

    setNavigation([...navigation]);
  }, [location.pathname]);

  const navLinks = navigation.map((item: Navigation) => {
    const linkClass = item.isActive
      ? `${styles.navigation__menu} ${styles.active}`
      : `${styles.navigation__menu} ${styles.inactive}`;
    return (
      <Link to={item.path} key={item.path} className={linkClass}>
        <span>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>{navLinks}</nav>;
}
