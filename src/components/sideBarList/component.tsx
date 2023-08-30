import React, { FC } from 'react';
import { SideBarItem } from '../sideBarItrem/component';
import styles from './style.module.scss';
import { useAppSelector } from '../../hooks';

type SideBarListProps = {
   actionsVisible: boolean;
   value: string;
};

export const SideBarList: FC<SideBarListProps> = ({
   actionsVisible,
   value,
}) => {
   const list = useAppSelector((item) => item.users.list);

   return (
      <ul className={styles.root}>
         {list
            .filter((item) =>
               item.name.toLowerCase().includes(value.toLowerCase()),
            )
            .map((user) => (
               <SideBarItem
                  key={user.id}
                  {...user}
                  actionsVisible={actionsVisible}
               />
            ))}
      </ul>
   );
};
