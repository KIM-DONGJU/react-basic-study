import { CardDTO } from '@/pages/index/types/card';

import styles from './DetailDialog.module.scss';
import toast, { toastConfig } from 'react-simple-toasts';
import "react-simple-toasts/dist/theme/dark.css";
import { useRecoilState } from 'recoil';
import { bookmarkListState } from '@/store/atoms/bookmarkState';

toastConfig({
  theme: 'dark',
})

interface DetailDialogProps {
  data: CardDTO
  handelDialog: (eventValue: boolean) => void
}


export default function DetailDialog({ data, handelDialog }: DetailDialogProps) {
  const closeDialog = () => {
    handelDialog(false);
  };

  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListState);
  const isBookmark = !!bookmarkList[data.id];

  const addBookmark = (selected: CardDTO) => {
    if (!isBookmark) {
      setBookmarkList({...bookmarkList, [selected.id]: selected});
      toast('해당 이미지를 북마크에 저장하였습니다.');
    } else {
      const copyBookmarkList = {...bookmarkList};
      delete copyBookmarkList[selected.id];
      setBookmarkList(copyBookmarkList);
      toast('해당 이미지를 북마크에서 제거하였습니다.');
    }
  }

  return (
    <div
      className={styles.container}
      onClick={closeDialog}
    >
      <div
        className={styles.container__dialog}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button
              className={styles.close__button}
              onClick={closeDialog}
            >
              <span
                className='material-symbols-outlined'
                style={{fontSize: 28 + 'px'}}
              >
                close
              </span>
            </button>
            <img
              className={styles.close__authorImage}
              src={data.user.profile_image.small}
              alt="사진작가 프로필 사진"
            />
            <span className={styles.close__authorName}>
              {data.user.name}
            </span>
          </div>
          <div className={styles.bookmark}>
            <button
              className={styles.bookmark__button}
              onClick={() => addBookmark(data)}
            >
              {/* 구글 아이콘 사용 예정 */}
              <span
                className='material-symbols-outlined'
                style={{fontSize: '16px', color: isBookmark ? 'red' : ''}}
              >
                favorite
              </span>
              북마크
            </button>
            <button className={styles.bookmark__button}>
              다운로드
            </button>
          </div>
        </div>
        <div className={styles.container__dialog__body}>
          <img
            className={styles.image}
            src={data.urls.small}
            alt="상세이미지"
          />
        </div>
        <div className={styles.container__dialog__footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>
                이미지 크기
              </span>
              <span className={styles.infoBox__item__value}>
                {data.width} X {data.height}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>
                업로드
              </span>
              <span className={styles.infoBox__item__value}>
                {data.created_at.split('T')[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>
                마지막 업데이트
              </span>
              <span className={styles.infoBox__item__value}>
                {data.updated_at.split('T')[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>
                다운로드
              </span>
              <span className={styles.infoBox__item__value}>
                {data.likes}
              </span>
            </div>
          </div>
          <div className={styles.tagBox}>
            {data.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className={styles.tagBox__tag}
                >
                  {tag.title}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
