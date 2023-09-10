import React, { FC, useCallback } from 'react';
import { SideBarItem } from '../sideBarItrem/component';
import styles from './style.module.scss';
import { useAppSelector } from '../../hooks';

type SideBarListProps = {
   actionsVisible: boolean;
   value: string;
   currentLengtn: any;
};

export const SideBarList: FC<SideBarListProps> = ({
   actionsVisible,
   value,
   currentLengtn,
}) => {
   const list = useAppSelector((item) => item.users.list);

   const filterType = useAppSelector((list) => list.users.filter);
   const [start, end] = useAppSelector((num) => num.users.filterAge);

   const userList = useCallback(() => {
      switch (filterType) {
         case 'все':
            return [...list]
               .filter((item) =>
                  item.name.toLowerCase().includes(value.toLowerCase()),
               )
               .filter((user) => user.age >= start && user.age <= end)
               .map((user) => (
                  <SideBarItem
                     key={user.id}
                     {...user}
                     actionsVisible={actionsVisible}
                  />
               ));
         case 'муж':
            return [...list]
               .filter((item) =>
                  item.name.toLowerCase().includes(value.toLowerCase()),
               )
               .filter((user) => user.sex === 'муж')
               .filter((user) => user.age >= start && user.age <= end)
               .map((user) => (
                  <SideBarItem
                     key={user.id}
                     {...user}
                     actionsVisible={actionsVisible}
                  />
               ));
         case 'жен':
            return [...list]
               .filter((item) =>
                  item.name.toLowerCase().includes(value.toLowerCase()),
               )
               .filter((user) => user.sex === 'жен')
               .filter((user) => user.age >= start && user.age <= end)
               .map((user) => (
                  <SideBarItem
                     key={user.id}
                     {...user}
                     actionsVisible={actionsVisible}
                  />
               ));
      }
   }, [actionsVisible, end, filterType, list, start, value]);

   React.useEffect(() => {
      // const list = userList();
      // if (list) {
      //    setCurrnetLength(list.length);
      // }

      currentLengtn(userList()?.length);
   }, [currentLengtn, userList]);

   return <ul className={styles.root}>{userList()}</ul>;
};
