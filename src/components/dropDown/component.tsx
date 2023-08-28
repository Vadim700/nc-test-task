import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { deleteUser } from '../../redux/slices/userSlice';

export const DropDown: React.FC = () => {
   const [open, setOpen] = React.useState<boolean>(false);
   const dropDownRef = React.useRef<HTMLDivElement>(null);
   const { id } = useParams();
   const dispatch = useAppDispatch();

   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen((open) => !open);
   };

   const onClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen((open) => !open);
   };

   const onClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(deleteUser()); // id
      setOpen((open) => !open);
   };

   React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
         if (event.key === 'Escape') {
            setOpen(false);
         }
      };
      document.addEventListener('keydown', handleEsc);

      return () => {
         document.removeEventListener('keydown', handleEsc);
      };
   }, []);

   return (
      <div className={styles.root} ref={dropDownRef}>
         <button
            className={open ? styles.active : styles.open}
            onClick={handleClick}
         >
            <span></span>
         </button>
         {open && (
            <span className={styles.action}>
               <button onClick={onClickEdit}>Изменить</button>
               <button onClick={onClickDelete}>Удалить</button>
            </span>
         )}
      </div>
   );
};
