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

   const closeButtonStyles = {
      transform: visibleSearch || openForm ? 'rotate(45deg)' : '',
      backgroundColor: visibleSearch || openForm ? 'var(--blue)' : '',
      color: visibleSearch || openForm ? 'var(--white)' : '',
   };

   const onclickPlus = () => {
      visibleSearch ? setVisibleSearch(false) : setOpenForm((open) => !open);
   };

   return (
      <aside className={styles.root}>
         <header className={styles.header}>
            <div className={styles.search}>
               <div className={styles.inputGroup}>
                  <button
                     onClick={() => setVisibleSearch(true)}
                     className={styles.startButton}
                     style={{
                        backgroundColor: visibleSearch ? 'white' : '',
                        color: visibleSearch ? 'var(--gray)' : '',
                     }}
                  >
                     <SearchIcon />
                  </button>
                  <CSSTransition
                     in={visibleSearch}
                     timeout={300}
                     classNames={{
                        enter: styles.inputWidthEnter,
                        enterActive: styles.inputWidthEnterActive,
                        exit: styles.inputWidthExit,
                        exitActive: styles.inputWidthExitActive,
                     }}
                     unmountOnExit
                     mountOnEnter
                  >
                     <input
                        type="text"
                        className={styles.input}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                     />
                  </CSSTransition>
               </div>

               <button>
                  <FilterIcon title="Фильтр" />
               </button>
               <button onClick={onclickPlus} style={closeButtonStyles}>
                  <PlusIcon />
               </button>
            </div>
         </header>
         <div className={styles.wrapperForm}>
            <CSSTransition
               in={openForm}
               timeout={300}
               classNames={{
                  enter: styles.fadeBodyEnter,
                  enterActive: styles.fadeBodyEnterActive,
                  exit: styles.fadeBodyExit,
                  exitActive: styles.fadeBodyExitActive,
               }}
               unmountOnExit
               mountOnEnter
            >
               <div className={styles.innerForm}>
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
