import React from 'react';
import styles from './style.module.scss';
import { DropDown } from '../dropDown/component';

type BodyHeaderProps = {};

export const BodyHeader: React.FC<BodyHeaderProps> = () => {
   return (
      <header className={styles.root}>
         <div className={styles.image}>
            <img src="../../../images/png/big-image.png" alt="" />
         </div>
         <div className={styles.row}>
            <div className={styles.name}>Рожков Денис Петрович</div>
            <span className={styles.age}>30 лет, муж</span>
         </div>
         <span className={styles.edit}>
            <DropDown />
         </span>
      </header>
   );
};
