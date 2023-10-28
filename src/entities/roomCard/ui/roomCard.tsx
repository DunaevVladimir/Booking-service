import { memo } from "react";
import { Room } from "../model/types";
import { numberFormat } from "../lib/numberFormat";
import Button from "@/shared/ui/button/button";
import styles from './roomCard.module.scss';

function RoomCard({roomCard}: Room) {

  return (
    <article className={styles.body}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3 className={styles.title}>{roomCard.title}</h3>
          <p className={styles.area}>{`${roomCard.area} кв.м`}</p>
          <p className={styles.adress}>{roomCard.adress}</p>
          <p className={styles.description}>{roomCard.description}</p>
        </div>
        <div className={styles.right}>
          <p className={styles.price}>{`${numberFormat(roomCard.price)} ₽`}</p>
          <Button onClick={() => {}}>Выбрать</Button>
        </div>
      </div>
    </article>
  );
}

export default memo(RoomCard);