import { CardDTO } from '@/pages/index/types/card';
import styles from './Card.module.scss';

interface CardProps {
  data: CardDTO;
  handelDialog: (eventValue: boolean) => void;
  handelSetData: (eventValue: CardDTO) => void;
}

export default function Card({ data, handelDialog, handelSetData }: CardProps) {
  const openDialog = () => {
    handelDialog(true);
    handelSetData(data);
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img className={styles.card__image} src={data.urls.small} alt={data.alt_description} />
    </div>
  );
}
