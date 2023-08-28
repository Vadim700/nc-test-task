import React, { FC } from 'react';
import styles from './style.module.scss';
import { SideBarList } from '../sideBarList/component';
import { ReactComponent as SearchIcon } from '../../svg/Search.svg';
import { ReactComponent as FilterIcon } from '../../svg/Filter.svg';
import { ReactComponent as PlusIcon } from '../../svg/Plus.svg';

type SideBarProps = {};

export const SideBar: FC<SideBarProps> = () => {
   const [visibleSearch, setVisibleSearch] = React.useState<boolean>(false);
   const [actionsVisible, setActionsVisible] = React.useState<boolean>(false);

   return (
      <aside className={styles.root}>
         <header className={styles.header}>
            {visibleSearch ? (
               <div className={styles.searchBlock}>
                  <label className={styles.label}>
                     <SearchIcon />
                     <input type="text" />
                  </label>
                  <button
                     onClick={() => setVisibleSearch((visible) => !visible)}
                  >
                     <PlusIcon />
                  </button>
               </div>
            ) : (
               <>
                  <button
                     className={styles.search}
                     onClick={() => setVisibleSearch((visible) => !visible)}
                  >
                     <SearchIcon />
                  </button>
                  <button className={styles.filter}>
                     <FilterIcon />
                  </button>
                  <button>
                     <PlusIcon />
                  </button>
               </>
            )}
         </header>
         <div className={styles.action}>
            {actionsVisible ? (
               <>
                  <span className={styles.count}>213</span>
                  <button
                     className={styles.button}
                     onClick={() => setActionsVisible((visible) => !visible)}
                  >
                     Выбрать
                  </button>
               </>
            ) : (
               <>
                  <label className={styles.label}>
                     <input className={styles.checkbox} type="checkbox" />
                     Все
                  </label>
                  <span className={styles.selected}>1</span>

                  <button className={styles.button}>Действия</button>
                  <button
                     className={styles.button}
                     onClick={() => setActionsVisible((visible) => !visible)}
                  >
                     Отменить
                  </button>
               </>
            )}
         </div>
         <SideBarList />
      </aside>
   );
};
