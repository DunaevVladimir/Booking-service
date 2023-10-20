import { memo } from "react";
import { RoomCardProps } from "../model/types";
import './roomCard.scss';

function RoomCard({roomCard}: RoomCardProps) {

  return (
    <article className='roomCard'>
      <p className='roomCard-type'>{roomCard.type}</p>
      <h3 className='roomCard-title'>{roomCard.title}</h3>
      <p className='roomCard-description'>{roomCard.description}</p>
      <p className='roomCard-price'>{roomCard.price}</p>
    </article>
  );
}

export default memo(RoomCard);