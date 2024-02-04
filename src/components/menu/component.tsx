import React, { useCallback } from 'react';
import styles from './style.module.scss';
import { NavLink } from 'react-router-dom';

import { NoteModal } from '../noteModal/component';

type MenuProps = {};

type IsActiveProps = {
   isActive: boolean;
};

export const Menu: React.FC<MenuProps> = () => {
   const setActive = useCallback(
      ({ isActive }: IsActiveProps): React.CSSProperties => {
         return { color: isActive ? 'var(--blue)' : 'var(--gray)' };
      },
      [],
   );

   return (
      <nav className={styles.root}>
         <ul className={styles.list}>
            <li className={styles.listItem}>
               <NavLink to={'notes'} className={styles.link} style={setActive}>
                  Заметки
               </NavLink>
            </li>
            <li className={styles.listItem}>
               <NavLink
                  to={'consultation'}
                  className={styles.link}
                  style={setActive}
               >
                  Консультации
               </NavLink>
            </li>
            <li className={styles.listItem}>
               <NavLink to={'movies'} className={styles.link} style={setActive}>
                  Видео
               </NavLink>
            </li>
            <li className={styles.listItem}>
               <NavLink to={'events'} className={styles.link} style={setActive}>
                  Мероприятия
               </NavLink>
            </li>
         </ul>
         <span className={styles.modal} title="Новая заметка">
            <NoteModal props={'newNote'} />
         </span>
      </nav>
   );
};
