import { useNavigate } from 'react-router-dom';
import styles from './CommonHeader.module.scss';

export default function CommonHeader() {
  const navigate = useNavigate();
  const moveToPage = (path: string) => {
    navigate(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox} onClick={() => moveToPage('/')}>
        <img
          className={styles.header__logoBox__logo}
          src="src/assets/images/image-logo.png"
          alt=""
        />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>사진제출</button>
        <button
          className={styles.header__profileBox__button}
          onClick={() => moveToPage('/bookmark')}
        >
          북마크
        </button>
        <span className={styles.header__profileBox__userName}>kdj0689@gmail.com</span>
      </div>
    </header>
  );
}
