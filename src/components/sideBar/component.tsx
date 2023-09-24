import React, { FC } from 'react';
import styles from './style.module.scss';
import { SideBarList } from '../sideBarList/component';
import { ReactComponent as SearchIcon } from '../../svg/Search.svg';
import { ReactComponent as FilterIcon } from '../../svg/Filter.svg';
import { ReactComponent as PlusIcon } from '../../svg/Plus.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
   deleteSelectedUsers,
   setSelectAll,
} from '../../redux/slices/userSlice';
import { FormUser } from '../formUser/component';
import { CSSTransition } from 'react-transition-group';
import { GoSidebarCollapse } from 'react-icons/go';
import { Filter } from '../filter/component';
import { useToggle } from '../../hooks/useToggle';

type SideBarProps = {};

export const SideBar: FC<SideBarProps> = () => {
   const [visibleSearch, setVisibleSearch] = React.useState<boolean>(false);
   const [actionsVisible, setActionsVisible] = React.useState<boolean>(true);
   const [allChecked, setAllChecked] = React.useState<boolean>(false);
   const [openForm, setOpenForm] = React.useState<boolean>(false);
   const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
   const [filterOpen, setFilterOpen] = React.useState<boolean>(false);

   const [value, setValue] = React.useState<string>('');
   const [currentCount, setCurrentCount] = React.useState(0);

   const dispatch = useAppDispatch();
   const data = useAppSelector((user) => user.users.list);

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

   const onSubmitModal = (): void => {};

   const closeUserForm = (data: any) => {
      setOpenForm(data);
   };

   const closeButtonStyles = {
      transform: visibleSearch || openForm ? 'rotate(135deg)' : '',
      backgroundColor: visibleSearch || openForm ? 'var(--blue)' : '',
      color: visibleSearch || openForm ? 'var(--white)' : '',
   };

   const onclickPlus = () => {
      visibleSearch ? setVisibleSearch(false) : setOpenForm((open) => !open);
   };

   const onClickMenu = () => {
      setMenuOpen((open) => !open);

      document.body.style.overflow = menuOpen ? 'visible' : 'hidden';
   };

   const currentLengtn = (e: number) => {
      setCurrentCount(e);
   };

   return (
      <aside
         className={styles.root}
         style={{
            backdropFilter: menuOpen ? 'blur(5px)' : '',
            backgroundColor: menuOpen ? 'rgba(0, 0, 0, .5)' : '', // почистить с помощью 'classnames'
            zIndex: menuOpen ? '3' : '0',
         }}
      >
         <span
            className={styles.burger}
            onClick={onClickMenu}
            style={{
               left: menuOpen ? '90%' : '15px',
               color: menuOpen ? 'white' : '',
               transform: menuOpen ? 'scale(-1, -1)' : '',
            }}
         >
            <GoSidebarCollapse />
         </span>
         {window.innerWidth < 768 ? (
            <CSSTransition
               in={menuOpen}
               timeout={300}
               classNames={{
                  enter: styles.asideBlockEnter,
                  enterActive: styles.asideBlockEnterActive,
                  exit: styles.asideBlockExit,
                  exitActive: styles.asideBlockExitActive,
               }}
               unmountOnExit
               mountOnEnter
            >
               <div className={styles.inner}>
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
                        <button
                           onClick={() => setFilterOpen((open) => !open)}
                           style={{
                              backgroundColor: filterOpen ? 'var(--blue)' : '',
                              color: filterOpen ? 'var(--white)' : '',
                              transform: filterOpen ? 'rotate(-180deg)' : '',
                           }}
                        >
                           <FilterIcon title="Фильтр" />
                        </button>
                        <button onClick={onclickPlus} style={closeButtonStyles}>
                           <PlusIcon />
                        </button>
                     </div>
                  </header>
                  <div
                     className={styles.filterWrapper}
                     style={{
                        marginTop: filterOpen ? '' : '-15px',
                        marginBottom: openForm ? '' : '-15px',
                        paddingTop:
                           filterOpen && window.innerWidth < 768 ? '10px' : '',
                     }}
                  >
                     <CSSTransition
                        in={filterOpen}
                        timeout={300}
                        classNames={{
                           enter: styles.filterEnter,
                           enterActive: styles.filterEnterActive,
                           exit: styles.filterExit,
                           exitActive: styles.filterExitActive,
                        }}
                        unmountOnExit
                        mountOnEnter
                     >
                        <Filter />
                     </CSSTransition>
                  </div>
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
                           <FormUser
                              props="newUser"
                              onSubmitModal={onSubmitModal}
                              onSumbit={closeUserForm}
                           />
                        </div>
                     </CSSTransition>
                  </div>
                  <div className={styles.action}>
                     {actionsVisible ? (
                        <>
                           <span className={styles.count}>{currentCount}</span>
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
                           <span className={styles.selected}>
                              {selectedLength}
                           </span>
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
                  <SideBarList
                     actionsVisible={actionsVisible}
                     value={value}
                     currentLengtn={currentLengtn}
                  />
               </div>
            </CSSTransition>
         ) : (
            <div
               className={styles.inner}
               style={{
                  left: menuOpen ? '15px' : '',
               }}
            >
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
                     <button
                        onClick={() => setFilterOpen((open) => !open)}
                        style={{
                           backgroundColor: filterOpen ? 'var(--blue)' : '',
                           color: filterOpen ? 'var(--white)' : '',
                           transform: filterOpen ? 'rotate(-180deg)' : '',
                        }}
                     >
                        <FilterIcon title="Фильтр" />
                     </button>
                     <button onClick={onclickPlus} style={closeButtonStyles}>
                        <PlusIcon />
                     </button>
                  </div>
               </header>
               <div
                  className={styles.filterWrapper}
                  style={{
                     marginTop: filterOpen ? '' : '-15px',
                     paddingTop: filterOpen ? '10px' : '',
                  }}
               >
                  <CSSTransition
                     in={filterOpen}
                     timeout={300}
                     classNames={{
                        enter: styles.filterEnter,
                        enterActive: styles.filterEnterActive,
                        exit: styles.filterExit,
                        exitActive: styles.filterExitActive,
                     }}
                     unmountOnExit
                     mountOnEnter
                  >
                     <Filter />
                  </CSSTransition>
               </div>
               <div
                  className={styles.wrapperForm}
                  style={{
                     marginTop: openForm ? '' : '-15px',
                  }}
               >
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
                        <FormUser
                           props="newUser"
                           onSubmitModal={onSubmitModal}
                           onSumbit={closeUserForm}
                        />
                     </div>
                  </CSSTransition>
               </div>
               <div className={styles.action}>
                  {actionsVisible ? (
                     <>
                        <span className={styles.count}>{currentCount}</span>
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
                        <span className={styles.selected}>
                           {selectedLength}
                        </span>
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
               <SideBarList
                  actionsVisible={actionsVisible}
                  value={value}
                  currentLengtn={currentLengtn}
               />
            </div>
         )}
      </aside>
   );
};
