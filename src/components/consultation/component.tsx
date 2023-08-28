import React from 'react';
import styles from './style.module.scss';
import { ConsultationItem } from '../consultationItem/component';

const consultation = [
   {
      id: 1,
      title: 'Online консультация',
      strong: '',
      icon: '',
   },
   {
      id: 2,
      title: 'Online консультация',
      strong: '',
      icon: '',
   },
   {
      id: 3,
      title: 'Личный приём',
      strong: 'Не подтверждена',
      icon: '',
   },
];

export const Consultation = () => {
   return (
      <ul className={styles.list}>
         {consultation.map((item) => (
            <ConsultationItem {...item} key={item.id} />
         ))}
      </ul>
   );
};
