import React from 'react';
import styles from './style.module.scss';
import { DropDown } from '../dropDown/component';

type NotesItemProps = {
   id?: number;
   title: string;
   date: string;
   image?: string;
};

export const NotesItem: React.FC<NotesItemProps> = ({
   id,
   title,
   date,
   image,
}) => {
   return (
      <div className={styles.root}>
         <li className={styles.item}>
            <p className={styles.text}>
               <span>{date}</span>
               {title}
            </p>
            {image && (
               <div className={styles.image}>
                  <img src={image} alt="cart" />
               </div>
            )}

            <span className={styles.dropDown}>
               <DropDown props={'noteDropDown'} idNote={id} />
            </span>
         </li>
      </div>
   );
};
