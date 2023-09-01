import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addNewUser, editUser } from '../../redux/slices/userSlice';

type FoumUserProps = {
   props: 'newUser' | 'editUser';
   onSubmit?: any;
   currentId?: string;
};

export const FormUser: React.FC<FoumUserProps> = ({
   props,
   onSubmit,
   currentId,
}) => {
   const [name, setName] = React.useState<string>('');
   const [age, setAge] = React.useState<string>('');
   const [sex, setSex] = React.useState<string>('');

   const currentUser = useAppSelector((user) => user.users.list).filter(
      (item) => item.id === Number(currentId),
   );
   const userName = currentUser[0]?.name;
   const userAge = currentUser[0]?.age;

   const dispatch = useAppDispatch();
   const userList = useAppSelector((user) => user.users.list).map(
      (item) => item.id,
   );
   const id = Math.max(...userList) + 1;

   const submitForm = (e: any) => {
      e.preventDefault();
      props === 'newUser' && dispatch(addNewUser({ id, name, age, sex }));
      props === 'editUser' && dispatch(editUser({ currentId, name, age, sex }));
      setName('');
      setAge('');
      onSubmit();
   };

   const styleForPopup = {
      border: props === 'editUser' ? '1px solid var(--stroke)' : '',
   };

   return (
      <div className={styles.form}>
         <form action="#" className={styles.body} onSubmit={submitForm}>
            {props === 'newUser' && (
               <input
                  type="text"
                  className={styles.name}
                  placeholder="ФИО"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                  style={styleForPopup}
               />
            )}
            {props === 'editUser' && (
               <input
                  type="text"
                  className={styles.name}
                  placeholder="ФИО"
                  onChange={(e: any) => setName(e.target.value)}
                  style={styleForPopup}
                  defaultValue={userName}
               />
            )}

            <p className={styles.row}>
               {props === 'newUser' && (
                  <input
                     type="number"
                     className={styles.age}
                     placeholder="Возраст"
                     onChange={(e: any) => setAge(e.target.value)}
                     value={age}
                     style={styleForPopup}
                  />
               )}
               {props === 'editUser' && (
                  <input
                     type="number"
                     className={styles.age}
                     placeholder="Возраст"
                     onChange={(e: any) => setAge(e.target.value)}
                     defaultValue={userAge}
                     style={styleForPopup}
                  />
               )}

               <select
                  className={styles.sex}
                  defaultValue="муж"
                  onChange={(e: any) => setSex(e.target.value)}
                  style={styleForPopup}
               >
                  <option value={sex}>Муж</option>
                  <option value={sex}>Жен</option>
               </select>
            </p>
            <button
               className={styles.submit}
               type="submit"
               onClick={submitForm}
            >
               {props === 'newUser' && 'Добавить пользователя'}
               {props === 'editUser' && 'Внести изменения'}
            </button>
         </form>
      </div>
   );
};
