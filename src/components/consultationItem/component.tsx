import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Camera } from '../../svg/Camera.svg';
import { ReactComponent as Friendship } from '../../svg/Friendship.svg';

type ConsultationItemProps = {
   id: number;
   title: string;
   icon: string;
   strong: string;
};

export const ConsultationItem: React.FC<ConsultationItemProps> = ({
   title,
   icon,
   strong,
   id,
}) => {
   return (
      <li>
         <Link className={styles.item} to={''}>
            <div className={styles.icon}>
               {id === 3 ? <Friendship /> : <Camera />}
            </div>
            <div className={styles.description}>
               <p className={styles.title}>{title}</p>
               <span className={styles.data}>15.01.2019, 12:30-13:00</span>
            </div>
            <strong className={styles.error}>{strong}</strong>
         </Link>
      </li>
   );
};
