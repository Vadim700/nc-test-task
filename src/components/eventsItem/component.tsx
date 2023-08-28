import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

type EventsItemProps = {
   id: number;
   title: string;
   image: string;
   data: string;
   time: string;
};

export const EventsItem: React.FC<EventsItemProps> = ({
   id,
   title,
   image,
   data,
   time,
}) => {
   return (
      <li className={styles.root}>
         <Link to={''} className={styles.item}>
            <div className={styles.image}>
               <img src={image} alt="" />
            </div>
            <div className={styles.description}>
               <p className={styles.title}>{title}</p>
               <div className={styles.row}>
                  <span className={styles.camera}>Вебинар</span>
                  <span className={styles.calendar}>{data}</span>
                  <span className={styles.time}>{time}</span>
               </div>
            </div>
         </Link>
      </li>
   );
};
