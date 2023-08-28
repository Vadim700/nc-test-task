import React from 'react';
import styles from './style.module.scss';
import { DropDown } from '../dropDown/component';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type BodyHeaderProps = {};

export const BodyHeader: React.FC<BodyHeaderProps> = () => {
   const { id } = useParams();

   const user = useAppSelector((user) => user.users.list).find(
      (item) => item.id === Number(id),
   );

   return (
      <header className={styles.root}>
         <div className={styles.image}>
            <img
               src={
                  user?.photo ? user.photo : '../../../images/png/no-image.png'
               }
               alt="userImage"
            />
         </div>
         <div className={styles.row}>
            <div className={styles.name}>{user?.fullName}</div>
            <span className={styles.age}>
               {user?.age + ' лет'}, {user?.sex}
            </span>
         </div>
         <span className={styles.edit}>
            <DropDown />
         </span>
      </header>
   );
};
