import React from 'react';
import styles from './style.module.scss';
import { RangeSlider } from '../range/component';
import { useAppDispatch } from '../../hooks';
import { genderFilter } from '../../redux/slices/userSlice';

export const Filter: React.FC = () => {
   const [range, setRange] = React.useState<number[]>([24, 48]);
   const [gender, setGender] = React.useState<'муж' | 'жен' | 'все'>('все');

   const dispantch = useAppDispatch();

   const onchange = (e: any) => {
      setRange(e);
   };

   return (
      <div className={styles.root}>
         <div className={styles.row}>
            <label className={styles.label}>
               <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => dispantch(genderFilter('муж'))}
               />
               Муж
            </label>
            <label className={styles.label}>
               <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => dispantch(genderFilter('жен'))}
               />
               Жен
            </label>
         </div>
         <div className={styles.range}>
            <span className={styles.rangeTitle}>Возраст</span>
            <RangeSlider onchange={onchange} />
            <span>
               {range[0] - 1} &#247; {range[1] + 1}
            </span>
         </div>
      </div>
   );
};
