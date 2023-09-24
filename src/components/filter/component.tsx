import React, { useCallback } from 'react';
import styles from './style.module.scss';
import { RangeSlider } from '../range/component';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { filterByAge, userFilter } from '../../redux/slices/userSlice';

export const Filter: React.FC = () => {
   const [range, setRange] = React.useState<number[]>([24, 48]);
   const [onlyMen, setOnlyMen] = React.useState<boolean>(false);
   const [onlyWomen, setOnlyWomen] = React.useState<boolean>(false);
   const [allSelected, setAllSelected] = React.useState<boolean>(false);

   const dispatch = useAppDispatch();
   const filterType = useAppSelector((user) => user.users.filter);

   const onchangeSlider = (e: number[]) => {
      dispatch(filterByAge(e));
      setRange(e);
   };

   React.useEffect(() => {
      setAllSelected(filterType === 'все');
      setOnlyMen(filterType === 'муж');
      setOnlyWomen(filterType === 'жен');
   }, [filterType]);

   return (
      <div className={styles.root}>
         <div className={styles.row}>
            <label className={styles.label}>
               <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={onlyMen}
                  onChange={() => dispatch(userFilter('муж'))}
               />
               Муж
            </label>
            <label className={styles.label}>
               <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={onlyWomen}
                  onChange={() => dispatch(userFilter('жен'))}
               />
               Жен
            </label>
            <label className={styles.label}>
               <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={allSelected}
                  onChange={() => dispatch(userFilter('все'))}
               />
               Все
            </label>
         </div>
         <div className={styles.range}>
            <span className={styles.rangeTitle}>Возраст</span>
            <RangeSlider onchange={onchangeSlider} />
            <span>
               {range[0] - 1} &#247; {range[1] + 1}
            </span>
         </div>
      </div>
   );
};
