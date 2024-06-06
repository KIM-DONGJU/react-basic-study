import { useEffect, useMemo, useState } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { getImageData, imageData } from '@/store/selectors/imageSelectors';

import Card from '@/pages/index/components/Card';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import CommonHeader from '@/components/common/header/CommonHeader';
import CommonNav from '@/components/common/navigation/CommonNav';
import CommonFooter from '@/components/common/footer/CommonFooter';
import DetailDialog from '@/components/common/dialog/DetailDialog';

import styles from './styles/MainPage.module.scss'
import { CardDTO } from './types/card';

const MainPage  = () => {
  const imgSelector = useRecoilValueLoadable(getImageData);
  const setImagesData = useSetRecoilState(imageData);
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (imgSelector.state === 'hasValue') {
      setImagesData(imgSelector.contents);
    }
  }, [imgSelector]);

  const cardList = useMemo(() => {
    return imgSelector.state === 'hasValue' ? (
      imgSelector.contents.results.map((card: CardDTO) => {
        return (
          <Card
            key={card.id}
            data={card}
            handelDialog={setOpen}
            handelSetData={setImgData}
          />
        )
    })) : <div className={styles.loading} />
  }, [imgSelector.contents])

  return (
    <div className={styles.page}>
        <CommonHeader />
        <CommonNav />
        <div className={styles.page__contents}>
            <div className={styles.page__contents__introBox}>
                <div className={styles.wrapper}>
                    <span className={styles.wrapper__title}>PhotoSplash</span>
                    <span className={styles.wrapper__desc}>
                        인터넷의 시각 자료 출처입니다. <br />
                        모든 지역에 있는 크리에이터들의 지원을 받습니다.
                    </span>
                    <CommonSearchBar />
                </div>
            </div>
            <div className={styles.page__contents__imageBox}>
              {cardList}
            </div>
        </div>
        <CommonFooter />
        {open &&
          <DetailDialog
            data={imgData}
            handelDialog={setOpen}
          />
        }
    </div>
  )
};

export default MainPage;
