import React from 'react';
import styles from './style.module.scss';

import { Notes } from '../notes/component';
import { Consultation } from '../consultation/component';
import { Movies } from '../movies/component';
import { Events } from '../events/component';
import { Route, Routes } from 'react-router-dom';

type ContentProps = {};

export const Content: React.FC<ContentProps> = () => {
   return (
      <div className={styles.root}>
         <Routes>
            <Route index element={<Notes />} />
            <Route path="consultation" element={<Consultation />} />
            <Route path="movies" element={<Movies />} />
            <Route path="events" element={<Events />} />
         </Routes>
      </div>
   );
};
