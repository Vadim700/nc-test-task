import React from 'react';
import styles from './style.module.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../../svg/Plus.svg';

type MenuProps = {};

type IsActiveProps = {
   isActive: boolean;
};

export const Menu: React.FC<MenuProps> = () => {
   const setActive = ({ isActive }: IsActiveProps): React.CSSProperties => {
      return { color: isActive ? 'var(--blue)' : 'var(--black)' };
   };

   return (
      <nav className={styles.root}>
         <ul className={styles.list}>
            <li className={styles.listItem}>
               <NavLink to={'/'} className={styles.link} style={setActive}>
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
         <button className={styles.addItem}>
            <Routes>
               <Route index element={<span>Новая заметка</span>} />
               <Route path="consultation" element={<span>Записать</span>} />
               <Route path="movies" element={<span>Рекомендовать</span>} />
               <Route path="events" element={<span>Рекомендовать</span>} />
            </Routes>
            <span>
               <PlusIcon />
            </span>
         </button>
      </nav>
   );
};
