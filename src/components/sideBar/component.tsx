import React, { FC } from 'react';
import styles from './style.module.scss';
import { SideBarList } from '../sideBarList/component';
import { ReactComponent as SearchIcon } from '../../svg/Search.svg';
import { ReactComponent as FilterIcon } from '../../svg/Filter.svg';
import { ReactComponent as PlusIcon } from '../../svg/Plus.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
   deleteSelectedUsers,
   setSelectAll,
} from '../../redux/slices/userSlice';
import { FormUser } from '../formUser/component';
import { CSSTransition } from 'react-transition-group';

type SideBarProps = {};

export const SideBar: FC<SideBarProps> = () => {
   const [visibleSearch, setVisibleSearch] = React.useState<boolean>(false);
   const [actionsVisible, setActionsVisible] = React.useState<boolean>(true);
   const [allChecked, setAllChecked] = React.useState<boolean>(false);
   const [value, setValue] = React.useState<string>('');
   const [openForm, setOpenForm] = React.useState<boolean>(false);

   const dispatch = useAppDispatch();
   const data = useAppSelector((user) => user.users.list);

   const dataLength = data.length;
   const selectedLength = data.filter((item) => item.selected === true).length;
   const dataSelected = data
      .filter((item) => item.selected === true)
      .map((item) => item.id);

   const onClickActionVisible = () => {
      setActionsVisible((visible) => !visible);
   };

   const onClickMainCheckbox = () => {
      setAllChecked((allChecked) => !allChecked);
      dispatch(setSelectAll(allChecked));
   };

   const onSubmit = () => {};

   const newUserButtonStyle = {
      transform: openForm ? 'rotate(45deg)' : '',
      backgroundColor: openForm ? 'var(--blue)' : '',
      color: openForm ? 'var(--white)' : '',
   };

   return (
      <aside className={styles.root}>
         <header className={styles.header}>
            {visibleSearch ? (
               <div className={styles.searchBlock}>
                  <label className={styles.label}>
                     <SearchIcon />
                     <input
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                     />
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
                     <SearchIcon title="Поиск" />
                  </button>
                  <button className={styles.filter}>
                     <FilterIcon title="Фильтр" />
                  </button>
                  <button
                     title={openForm ? 'Закрыть' : 'Добавать пользователя'}
                     onClick={() => setOpenForm((open) => !open)}
                     style={newUserButtonStyle}
                  >
                     <PlusIcon />
                  </button>
               </>
            )}
         </header>

         <div className={styles.innerForm}>
            <CSSTransition
               in={openForm}
               timeout={300}
               classNames={{
                  enter: styles.fadeEnter,
                  enterActive: styles.fadeEnterActive,
                  exit: styles.fadeExit,
                  exitActive: styles.fadeExitActive,
               }}
               unmountOnExit
            >
               <div className={styles.wrapperForm}>
                  <FormUser props="newUser" onSubmit={onSubmit} />
               </div>
            </CSSTransition>
         </div>

         <div className={styles.action}>
            {actionsVisible ? (
               <>
                  <span className={styles.count}>{dataLength}</span>
                  <button
                     className={styles.button}
                     onClick={onClickActionVisible}
                  >
                     Выбрать
                  </button>
               </>
            ) : (
               <>
                  <label className={styles.label}>
                     <input
                        className={styles.checkbox}
                        type="checkbox"
                        onClick={onClickMainCheckbox}
                        style={{ marginLeft: '-5px' }}
                     />
                     Все
                  </label>
                  <span className={styles.selected}>{selectedLength}</span>
                  {selectedLength ? (
                     <button
                        className={styles.button}
                        onClick={() =>
                           dispatch(deleteSelectedUsers(dataSelected))
                        }
                     >
                        Удалить
                     </button>
                  ) : (
                     ''
                  )}
                  <button
                     className={styles.button}
                     onClick={onClickActionVisible}
                  >
                     Отменить
                  </button>
               </>
            )}
         </div>
         <SideBarList actionsVisible={actionsVisible} value={value} />
      </aside>
   );
};
