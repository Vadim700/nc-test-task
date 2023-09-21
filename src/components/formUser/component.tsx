import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addNewUser, editUser } from '../../redux/slices/userSlice';
import { useForm } from 'react-hook-form';

type FoumUserProps = {
   props: 'newUser' | 'editUser';
   onSubmitModal?: any;
   currentId?: string;
   onSumbit?: any;
};

type Inputs = {
   name: string;
   age: number;
   sex: string;
};

export const FormUser: React.FC<FoumUserProps> = ({
   props,
   onSubmitModal,
   currentId,
   onSumbit,
}) => {
   const [photo, setPhoto] = React.useState<string>('');

   const currentUser = useAppSelector((user) => user.users.list).filter(
      (item) => item.id === Number(currentId),
   );
   const userName = currentUser[0]?.name;
   const userAge = currentUser[0]?.age;
   const userPhoto = currentUser[0]?.photo;

   const dispatch = useAppDispatch();
   const userList = useAppSelector((user) => user.users.list).map(
      (item) => item.id,
   );
   const id = Math.max(...userList) + 1;

   const submitForm = (userInfo: any) => {
      const { name, age, sex } = userInfo;

      if (name && age && props === 'newUser') {
         dispatch(addNewUser({ id, name, age, sex, photo, selected: false }));
      }

      if ((name || age) && props === 'editUser') {
         dispatch(editUser({ currentId, name, age, sex, photo }));
      }

      props === 'newUser' && onSumbit(false); // for closed userForm
      props === 'editUser' && onSubmitModal(); // for closed Popup
   };

   const styleForPopup = {
      border: props === 'editUser' ? '1px solid var(--stroke)' : '',
   };

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         let file: File | undefined = e.target.files[0];

         const reader = new FileReader();

         reader.onload = (e: ProgressEvent<FileReader>) => {
            setPhoto(e.target?.result as string);
         };

         reader.readAsDataURL(file);
      }
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>({ mode: 'onBlur' });

   return (
      <div className={styles.form}>
         <form
            action="#"
            className={styles.body}
            onSubmit={handleSubmit(submitForm)}
         >
            <div className={styles.bio}>
               {props === 'newUser' && (
                  <>
                     <div className={styles.file}>
                        <label htmlFor="fileInput" className={styles.fileLabel}>
                           <img
                              src={photo || '../../../images/png/no-image.png'}
                              alt="фото"
                           />
                        </label>
                        <input
                           type="file"
                           id="fileInput"
                           style={{ display: 'none' }}
                           onChange={handleImageChange}
                        />
                     </div>
                     <div className={styles.inputWrapper}>
                        <input
                           type="text"
                           className={styles.name}
                           placeholder="ФИО"
                           style={styleForPopup}
                           {...register('name', { required: true })}
                           autoComplete="none"
                        />
                        {errors.name && (
                           <span
                              className={styles.error}
                              title="Пожалуйста, заполните поле"
                           >
                              <img src="../../../images/icons/Mod.png" alt="" />
                           </span>
                        )}
                     </div>
                  </>
               )}
               {props === 'editUser' && (
                  <>
                     <div className={styles.file}>
                        <label htmlFor="fileInput" className={styles.fileLabel}>
                           {userPhoto ? (
                              <img src={photo || userPhoto} alt="фото" />
                           ) : (
                              <img
                                 src={
                                    !userPhoto && !photo
                                       ? '../../../images/png/no-image.png'
                                       : photo
                                 }
                                 alt="фото"
                              />
                           )}
                        </label>
                        <input
                           type="file"
                           id="fileInput"
                           style={{ display: 'none' }}
                           onChange={handleImageChange}
                        />
                     </div>
                     <input
                        type="text"
                        className={styles.name}
                        placeholder="ФИО"
                        style={styleForPopup}
                        defaultValue={userName}
                        {...register('name', { required: true })}
                     />
                  </>
               )}
               <div className={styles.row}>
                  {props === 'newUser' && (
                     <div className={styles.inputWrapper}>
                        <input
                           type="number"
                           className={styles.age}
                           placeholder="Возраст"
                           style={styleForPopup}
                           {...register('age', { required: true })}
                           autoComplete="off"
                        />
                        {errors.age && (
                           <span
                              className={styles.errorAge}
                              title="Пожалуйста, заполните поле"
                           >
                              <img src="../../../images/icons/Mod.png" alt="" />
                           </span>
                        )}
                     </div>
                  )}
                  {props === 'editUser' && (
                     <input
                        type="number"
                        className={styles.age}
                        placeholder="Возраст"
                        defaultValue={userAge}
                        style={styleForPopup}
                        {...register('age', { required: true })}
                     />
                  )}
                  <select
                     className={styles.sex}
                     {...register('sex')}
                     style={styleForPopup}
                  >
                     <option value={'муж'}>Муж</option>
                     <option value={'жен'}>Жен</option>
                  </select>
               </div>
            </div>
            <button className={styles.submit} type="submit">
               {props === 'newUser' && 'Добавить пользователя'}
               {props === 'editUser' && 'Внести изменения'}
            </button>
         </form>
      </div>
   );
};
