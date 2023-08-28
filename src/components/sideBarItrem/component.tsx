import React, { FC } from 'react';
import styles from './style.module.scss';
import { NavLink } from 'react-router-dom';

type SideBarItemProps = {
   id: number;
   photo: string;
   name: string;
   fullName: string;
   selected: boolean;
   mark: string;
   actionsVisible: boolean;
   allChecked: boolean;
};

export const SideBarItem: FC<SideBarItemProps> = ({
   id,
   photo,
   name,
   fullName,
   selected,
   mark,
   actionsVisible,
   allChecked,
}) => {
   const [checked, setChecked] = React.useState<boolean>(false);

   const handleChange = () => {
      if (!actionsVisible) {
         setChecked((selected) => !selected);
      }
   };

   const setActive = ({ isActive }: any): any => {
      return {
         backgroundColor: isActive ? 'var(--grey-2)' : 'var(--white)',
         outline: isActive ? '1px solid var(--white)' : '',
      };
   };

   return (
      <li className={styles.root}>
         <NavLink
            to={`${id}/notes`}
            className={styles.label}
            onClick={handleChange}
            style={setActive}
         >
            {!actionsVisible && (
               <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={allChecked ? allChecked : checked}
                  onChange={handleChange}
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
            <div className={styles.name}>{name}</div>
            {mark && (
               <span className={styles.mark}>
                  <img src={mark} alt="mark" />
               </span>
            )}
         </NavLink>
      </li>
   );
};
