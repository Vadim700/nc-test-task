import React from 'react';
import styles from './style.module.scss';

import { NotesItem } from '../notesItem/component';
import { useAppSelector } from '../../redux/hooks';

export const Notes: React.FC = () => {
   const notes = useAppSelector((item) => item.notes.list);

   return (
      <div className={styles.root}>
         <ul className={styles.list}>
            {notes.map((item, index) => (
               <NotesItem {...item} key={index} />
            ))}
         </ul>
      </div>
   );
};
