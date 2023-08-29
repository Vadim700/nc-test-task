import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { removeUser, editUser } from '../../redux/slices/userSlice';
import { User } from '../../types';

export const DropDown: React.FC = () => {
   const [open, setOpen] = React.useState<boolean>(false);
   const dropDownRef = React.useRef<HTMLDivElement>(null);
   const navigate = useNavigate();

   const { id } = useParams() as { id: string };
   const dispatch = useAppDispatch();

   const user = useAppSelector((user) => user.users.list).find(
      (item: User) => item.id === Number(id),
   );

   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen((open) => !open);
   };

   const onClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (user) {
         dispatch(editUser(user.id));
      }
      setOpen((open) => !open);
   };

   const onClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (user) {
         dispatch(removeUser(user.id));
         parseInt(id) === 0
            ? navigate(`/${parseInt(id) - 1}/notes`)
            : navigate(`/${parseInt(id) + 1}/notes`); // ???
      }
      setOpen((open) => !open);
   };

   const onDocumentClick = (e: any) => {
      if (!e.target.closest('button')) {
         setOpen(false);
      }
   };

   React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
         if (event.key === 'Escape') {
            setOpen(false);
         }
      };
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('click', onDocumentClick);

      return () => {
         document.removeEventListener('keydown', handleEsc);
         document.removeEventListener('keydown', onDocumentClick);
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
