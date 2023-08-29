import React, { FC } from 'react';
import { SideBarItem } from '../sideBarItrem/component';
import styles from './style.module.scss';
import { useAppSelector } from '../../hooks';

type SideBarListProps = {
   actionsVisible: boolean;
};

export const SideBarList: FC<SideBarListProps> = ({ actionsVisible }) => {
   const list = useAppSelector((item) => item.users.list);
   console.log(
      list.map((i) => i.id),
      '>>> state.list',
   );

   return (
      <ul className={styles.root}>
         {list.map((user) => (
            <SideBarItem
               key={user.id}
               {...user}
               actionsVisible={actionsVisible}
            />
         ))}
      </ul>
   );
};
