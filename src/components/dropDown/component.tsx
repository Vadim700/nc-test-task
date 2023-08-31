import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { removeUser } from '../../redux/slices/userSlice';
import { User } from '../../types';
import { UserModal } from '../userModal/component';
import { NoteModal } from '../noteModal/component';
import { removeNote } from '../../redux/slices/noteSlice';

type DropDownProps = {
   props: 'noteDropDown' | 'userDropDown';
   idNote?: number;
};

export const DropDown: React.FC<DropDownProps> = ({ props, idNote }) => {
   const [open, setOpen] = React.useState<boolean>(false);
   const dropDownRef = React.useRef<HTMLDivElement>(null);

   const arrayUserId = useAppSelector((user) => user.users.list).map(
      (item) => item.id,
   );
   const minId = Math.min(...arrayUserId);

   const navigate = useNavigate();

   const { id } = useParams() as { id: string };
   const dispatch = useAppDispatch();

   const user = useAppSelector((user) => user.users.list).find(
      (item: User) => item.id === Number(id),
   );

   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen((open) => !open);
   };

   const onClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props === 'userDropDown') {
         if (user) {
            dispatch(removeUser(user?.id));
            parseInt(id) === minId
               ? navigate(`/${parseInt(id) + 1}/notes`)
               : navigate(`/${parseInt(id) - 1}/notes`);
         }
      }

      if (props === 'noteDropDown') {
         dispatch(removeNote(idNote));
      }

      setOpen((open) => !open);
   };

   React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
         if (event.key === 'Escape') {
            setOpen(false);
         }
      };

      const onDocumentClick = (e: any) => {
         if (!e.target.closest('button') && !e.target.closest('.MuiBox-root')) {
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
               {props === 'userDropDown' && <UserModal />}
               {props === 'noteDropDown' && (
                  <NoteModal idNote={idNote} props={'editNote'} />
               )}
               <button onClick={onClickDelete}>Удалить</button>
            </span>
         )}
      </div>
   );
};
