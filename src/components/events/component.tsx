import React from 'react';
import styles from './style.module.scss';
import { EventsItem } from '../eventsItem/component';

const events = [
   {
      id: 1,
      title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов ',
      image: '../../../images/png/event-image.png',
      data: '9 марта 2021',
      time: '17:00',
   },
   {
      id: 2,
      title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов ',
      image: '../../../images/png/event-image.png',
      data: '8 ноября 2019',
      time: '16:00',
   },
   {
      id: 3,
      title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов ',
      image: '../../../images/png/event-image.png',
      data: '3 сентября 2023',
      time: '16:30',
   },
   {
      id: 4,
      title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов ',
      image: '../../../images/png/event-image.png',
      data: '2 июля 2018',
      time: '14:45',
   },
];

export const Events = () => {
   return (
      <ul className={styles.list}>
         {events.map((item) => (
            <EventsItem {...item} key={item.id} />
         ))}
      </ul>
   );
};
