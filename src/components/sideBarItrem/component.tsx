import React, { FC } from 'react';
import styles from './style.module.scss';
import { NavLink, useParams } from 'react-router-dom';
import { toggleUserSelected } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

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
}

export const SideBarItem: FC<SideBarItemProps> = ({
   id,
   photo,
   name,
   fullName,
   selected,
   mark,
   actionsVisible,
}) => {
   const [checked, setChecked] = React.useState<boolean>(true);
   const dispatch = useAppDispatch();

   const onClickItemList = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!actionsVisible) {
         e.preventDefault();
      }
   };

   const onClickCheckbox = () => {
      dispatch(toggleUserSelected(id));
   };

   React.useEffect(() => {
      setChecked((checked) => !checked);
   }, [selected]);

   const setActive = ({ isActive }: SetActiveProps): ActiveStyles => {
      return {
         backgroundColor: isActive ? 'var(--grey-2)' : 'var(--white)',
         outline: isActive ? '1px solid var(--white)' : '',
         cursor: !actionsVisible ? 'auto' : 'pointer',
      };
   };

   const user = useAppSelector((user) => user.users.list).find(
      (item) => item.id === Number(id),
   );

   const userName = name.split(' ')[0] + ' ' + name.split(' ')[1];
   const singleWord = name.split(' ')[0];

   return (
      <li className={styles.root}>
         <NavLink
            to={`${id}/notes`}
            className={styles.label}
            onClick={onClickItemList}
            style={setActive}
         >
            {!actionsVisible && (
               <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={checked}
                  onChange={onClickCheckbox}
               />
            )}
            <div
               className={styles.image}
               style={{ paddingLeft: !actionsVisible ? '42px' : '' }}
            >
               <img
                  src={photo ? photo : '../../../images/png/no-image.png'}
                  alt="user"
               />
            </div>
            <div className={styles.name}>
               {name.split(' ')[1] ? userName : singleWord}
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
