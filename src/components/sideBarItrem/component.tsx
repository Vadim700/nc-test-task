import React, { FC, ReactHTMLElement } from 'react';
import styles from './style.module.scss';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { toggleUserSelected } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReactComponent as UserIcon } from '../../svg/User.svg';

type SideBarItemProps = {
   id: number;
   photo?: string;
   name: string;
   fullName?: string;
   selected?: boolean;
   mark?: string;
   actionsVisible: boolean;
};

interface SetActiveProps {
   isActive: boolean;
}

interface ActiveStyles {
   backgroundColor: string;
   outline: string;
   cursor: string;
   paddingLeft: string;
}

export const SideBarItem: FC<SideBarItemProps> = ({
   id,
   photo,
   name,
   selected,
   mark,

   actionsVisible,
}) => {
   const [checked, setChecked] = React.useState(false);

   const linkRef = React.useRef<any>(null);
   const dispatch = useAppDispatch();
   const location = useLocation();

   const onClickItemList = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!actionsVisible) {
         e.preventDefault();
      }
   };

   const setActive = ({ isActive }: SetActiveProps): ActiveStyles => {
      return {
         backgroundColor: isActive ? 'var(--grey-2)' : 'var(--white)',
         outline: isActive ? '1px solid var(--white)' : '',
         cursor: !actionsVisible ? 'auto' : 'pointer',
         paddingLeft: !actionsVisible ? '40px' : '',
      };
   };

   React.useEffect(() => {
      setChecked((checked) => !checked);
   }, [dispatch, id, selected]);

   const userName = name.split(' ')[0] + ' ' + name.split(' ')[1];
   const singleWord = name.split(' ')[0];

   const isActive = location.pathname === `/${id}/notes`;

   return (
      <li className={styles.root}>
         <NavLink
            to={`${id}/notes`}
            className={styles.label}
            onClick={onClickItemList}
            style={setActive}
            ref={linkRef}
         >
            {!actionsVisible && (
               <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={selected}
                  onChange={() => dispatch(toggleUserSelected(id))}
               />
            )}

            <div className={styles.image}>
               {photo ? (
                  <img src={photo} alt="user" />
               ) : (
                  <UserIcon
                     style={{
                        color: isActive ? 'var(--white)' : 'var(--grey-2)',
                     }}
                  />
               )}
            </div>
            <div className={styles.name}>
               {name.split(' ')[1] ? userName : singleWord}
               {}
            </div>
            {mark && (
               <span className={styles.mark}>
                  <img src={mark} alt="mark" />
               </span>
            )}
         </NavLink>
      </li>
   );
};
