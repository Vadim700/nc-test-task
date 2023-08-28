import React from 'react';
import styles from './style.module.scss';

import { MoviesItem } from '../moviesItem/component';

const movis = [
   {
      id: 1,
      title: 'Крабик, ходьба в бок в приседе с двумя резинками Кра…',
      name: 'Астахова Е.В.',
      image: '../../../images/png/movie-1.png',
      data: '',
   },
   {
      id: 2,
      title: 'Разминка для локтевого сустава',
      name: 'Астахова Е.В.',
      image: '../../../images/png/movie-2.png',
      data: '19.06.2018 - 22.01.2019',
   },
   {
      id: 3,
      title: 'Разминка для локтевого суставаРазминка для локтевого..',
      name: 'Астахова Е.В.',
      image: '../../../images/png/movie-3.png',
      data: '15.03.2018 - 22.01.2019',
   },
];

type MoviesProps = {};

export const Movies: React.FC<MoviesProps> = () => {
   return (
      <ul className={styles.list}>
         {movis.map((item) => (
            <MoviesItem {...item} key={item.id} />
         ))}
      </ul>
   );
};
