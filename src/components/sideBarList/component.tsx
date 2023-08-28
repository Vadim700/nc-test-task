import React, { FC } from 'react';
import { SideBarItem } from '../sideBarItrem/component';
import styles from './style.module.scss';

const list = [
   {
      id: 1,
      photo: '../../../images/png/image-1.png',
      name: 'Кравцова Александра',
      fullName: 'Кравцова Александра Викторовна',
      age: 28,
      sex: 'жен',
      selected: false,
      mark: '../../../images/icons/telegram-icon.png',
   },
   {
      id: 2,
      photo: '../../../images/png/image-2.png',
      name: 'Рожков Денис ',
      fullName: 'Рожков Денис Петрович',
      age: 30,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 3,
      photo: '../../../images/png/image-1.png',
      name: 'Кравцова Александра',
      fullName: 'Кравцова Александра Викторовна',
      age: 28,
      sex: 'жен',
      selected: false,
      mark: '../../../images/icons/Mod.png',
   },
   {
      id: 4,
      photo: '../../../images/png/image-3.png',
      name: 'Диброва Алевтина',
      fullName: 'Диброва Алевтина Хизбулловна',
      age: 26,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 5,
      photo: '../../../images/png/image-4.png',
      name: 'Иванов Дмитрий',
      fullName: 'Иванов Дмитрий Евгеньевич',
      age: 33,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 6,
      photo: '',
      name: 'nosikov@list.ru',
      fullName: 'nosikov@list.ru',
      age: 225,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 7,
      photo: '../../../images/png/image-5.png',
      name: 'Форс Александр',
      fullName: 'Форс Александр Форсмажорович',
      age: 42,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 8,
      photo: '../../../images/png/image-6.png',
      name: 'Ахмедов Артур',
      fullName: 'Ахмедов Артур Ахматзянович',
      age: 38,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 9,
      photo: '../../../images/png/image-7.png',
      name: 'Блажевич Игорь',
      fullName: 'Блажевич Игорь Неблажевич',
      age: 35,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 10,
      photo: '../../../images/png/image-8.png',
      name: 'Валиева Руфина',
      fullName: 'Валиева Руфина Раисовна',
      age: 33,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 11,
      photo: '../../../images/png/image-9.png',
      name: 'Волошина Виктория',
      fullName: 'Волошина Виктория Эдуардовна',
      age: 29,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 12,
      photo: '../../../images/png/image-9.png',
      name: 'Волошина Виктория',
      fullName: 'Волошина Виктория Эдуардовна',
      age: 29,
      sex: 'жен',
      selected: false,
      mark: '',
   },
];

type SideBarListProps = {};

export const SideBarList: FC<SideBarListProps> = () => {
   return (
      <ul className={styles.root}>
         {list.map((user) => (
            <SideBarItem key={user.id} {...user} />
         ))}
      </ul>
   );
};
