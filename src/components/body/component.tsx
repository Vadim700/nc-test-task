import React from 'react';
import styles from './style.module.scss';
import { BodyHeader } from '../bodyHeader/component';
import { Menu } from '../menu/component';
import { Content } from '../content/component';

type BodyProps = {};

export const Body: React.FC<BodyProps> = () => {
   return (
      <div className={styles.root}>
         <BodyHeader />
         <Menu />
         <Content />
      </div>
   );
};
