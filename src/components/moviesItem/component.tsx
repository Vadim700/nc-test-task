import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

type MoviesItemProps = {
   id: number;
   title: string;
   name: string;
   image: string;
   data: string;
};

export const MoviesItem: React.FC<MoviesItemProps> = ({
   id,
   title,
   name,
   image,
   data,
}) => {
   return (
      <li className={styles.root}>
         <Link to={''} className={styles.item}>
            <div className={styles.image}>
               <img src={image} alt="" />
            </div>
            <div className={styles.description}>
               <p className={styles.title}>{title}</p>
               <span className={styles.name}>{name}</span>
            </div>
            <span className={styles.data}>{data}</span>
         </Link>
      </li>
   );
};
