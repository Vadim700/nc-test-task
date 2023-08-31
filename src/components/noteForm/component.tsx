import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addNote, editNote } from '../../redux/slices/noteSlice';

type NoteFormProps = {
   currentId?: string;
   onSubmit: any;
   id?: number;
   props: 'newNote' | 'editNote';
};

export const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, id, props }) => {
   const [title, setTitle] = React.useState<string>('');
   const dispatch = useAppDispatch();

   const defaultMessage = useAppSelector((item) => item.notes.list).find(
      (item) => item.id === id,
   );

   const currentDate = new Date();
   const date = `${currentDate.getDate().toString().padStart(2, '0')}.${(
      currentDate.getMonth() + 1
   )
      .toString()
      .padStart(2, '0')}.${currentDate.getFullYear()}`;

   const handleSubmit = (e: any) => {
      e.preventDefault();

      props === 'editNote' && dispatch(editNote({ id, title, date }));
      props === 'newNote' && dispatch(addNote({ id, title, date }));

      setTitle(e.target[0].title);
      onSubmit();
   };
   return (
      <div className={styles.root}>
         <form action="#" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.textarea}>
               {props === 'editNote' && (
                  <textarea
                     placeholder="Введите сообщение"
                     onChange={(e) => setTitle(e.target.value)}
                     defaultValue={defaultMessage?.title}
                  ></textarea>
               )}
               {props === 'newNote' && (
                  <textarea
                     placeholder="Введите сообщение"
                     onChange={(e) => setTitle(e.target.value)}
                     value={title}
                  ></textarea>
               )}
            </div>
            <button className={styles.button} type="submit">
               Отправить
            </button>
         </form>
      </div>
   );
};
