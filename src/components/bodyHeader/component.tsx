import React from 'react';
import styles from './style.module.scss';
import { DropDown } from '../dropDown/component';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { LoaderHeaderBody } from '../loaderBodyHeader/components';

type BodyHeaderProps = {};

export const BodyHeader: React.FC<BodyHeaderProps> = () => {
   const { id } = useParams();

   const user = useAppSelector((user) => user.users.list).find(
      (item) => item.id === Number(id),
   );

   const userImage = useAppSelector((item) => item.users.userImage);

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
            <div className={styles.name}>{user?.name}</div>
            <span className={styles.age}>
               {user?.age ? user?.age + ' лет,  ' : <LoaderHeaderBody />}
               {user?.sex}
            </span>
         </div>
         <span className={styles.edit}>
            <DropDown props={'userDropDown'} />
         </span>

         <p>{userImage}</p>
      </header>
   );
};
