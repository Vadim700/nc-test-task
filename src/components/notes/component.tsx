import React from 'react';
import styles from './style.module.scss';

import { NotesItem } from '../notesItem/component';

const notes = [
   {
      id: 1,
      title: 'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
      data: '20.12.2019',
      image: '',
   },
   {
      id: 2,
      title: 'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
      data: '22.03.2022',
      image: '../../../images/png/map.png',
   },
];

export const Notes = () => {
   return (
      <div className={styles.root}>
         <ul className={styles.list}>
            {notes.map((item) => (
               <NotesItem {...item} key={item.id} />
            ))}
         </ul>
      </div>
   );
};
