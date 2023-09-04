import React from 'react';
import styles from './style.module.scss';

import { NotesItem } from '../notesItem/component';
import { useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';

export const Notes: React.FC = () => {
   const notes = useAppSelector((item) => item.notes.list);
   const { id } = useParams() as { id: string };

   return (
      <div className={styles.root}>
         <ul className={styles.list}>
            {notes.map((item) => (
               <NotesItem {...item} key={item.id} />
            ))}
         </ul>
      </div>
   );
};
