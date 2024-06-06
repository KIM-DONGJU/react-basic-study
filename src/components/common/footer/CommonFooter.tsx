import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';

import { imageData } from '@/store/selectors/imageSelectors';
import { pageState } from '@/store/atoms/pageState';
import styles from './CommonFooter.module.scss';
import { searchState } from '@/store/atoms/searchState';

export default function CommonFooter() {
  const image = useRecoilValue(imageData);
  const [page, setPage] = useRecoilState(pageState);
  const searchStateData = useRecoilValue(searchState);

  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0)
  }, [searchStateData])

  const newArr: number[] = [];
  for (let i = 1; i < image.total_pages + 1 || 0; i++) {
    newArr.push(i);
  }

  const length = newArr.length;
  const divide = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0);
  const res = [];

  for (let i = 0; i < divide; i++) {
    res.push(newArr.splice(0, 10));
  }

  const moveToPage = (selected: number) => {
    setPage(selected);
  };

  const moveToPrev = () => {
    if (step === 0) return;
    setStep(step - 1);
    setPage(res[step-1][0]);
  };

  const moveToNext = () => {
    if (step >= res[step].length - 1) return;
    setStep(step + 1);
    setPage(res[step + 1][0]);
  }

  const pages = res[step]?.map((_page, index) => {
    const isActivePage = page < 11 ? page - 1 : page - 1 - (step * 10);
    const buttonClass = (
      index === isActivePage ?
        `${styles.pagination__button} ${styles.active}` :
        `${styles.pagination__button} ${styles.inactive}`
    );
    return (
      <button
        className={buttonClass}
        key={_page}
        onClick={() => moveToPage(_page)}
      >
        {_page}
      </button>
    )
  })

  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
          <button
            className={styles.pagination__button}
            onClick={moveToPrev}
          >
            <img src="src/assets/icons/icon-arrowLeft.svg" alt="left-arrow" />
          </button>
          {/* 변경될 부분 */}
          {pages}
          <button
            className={styles.pagination__button}
            onClick={moveToNext}
          >
            <img src="src/assets/icons/icon-arrowRight.svg" alt="left-right" />
          </button>
      </div>
    </footer>
  )
}
