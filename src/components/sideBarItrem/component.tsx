import React, { FC } from 'react';
import styles from './style.module.scss';

type SideBarItemProps = {
   id: number;
   photo: string;
   name: string;
   fullName: string;
   selected: boolean;
   mark: string;
};

export const SideBarItem: FC<SideBarItemProps> = ({
   id,
   photo,
   name,
   fullName,
   selected,
   mark,
}) => {
   const [checked, setChecked] = React.useState<boolean>(false);

   return (
      <li className={styles.root}>
         <label
            htmlFor=""
            className={styles.label}
            onClick={() => setChecked((i) => !i)}
         >
            <input
               className={styles.checkbox}
               type="checkbox"
               checked={checked}
               onChange={() => setChecked((i) => !i)}
            />
            <div className={styles.image}>
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
         </label>
      </li>
   );
};
