import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { bookmarkListState } from '@/store/atoms/bookmarkState';

import CommonHeader from '@/components/common/header/CommonHeader';
import styles from './Bookmark.module.scss';
import Card from './components/Card';

export default function Bookmark() {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListState);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      <main className={styles.page__contents}>
        {Object.values(bookmarkList).map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </main>
    </div>
  );
}
