import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addNewUser, editUser, userImage } from '../../redux/slices/userSlice';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';

type FoumUserProps = {
   props: 'newUser' | 'editUser';
   onSubmitModal?: any;
   currentId?: string;
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
}) => {
   const [selectedImage, setSelectedImage] = React.useState<string>('');

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

   const submitForm = (userInfo: any) => {
      const { name, age, sex } = userInfo;

      if (name && age && props === 'newUser') {
         dispatch(addNewUser({ id, name, age, sex }));
      }

      if ((name || age) && props === 'editUser') {
         dispatch(editUser({ currentId, name, age, sex }));
      }

      onSubmitModal(); // close Popup
   };

   const styleForPopup = {
      border: props === 'editUser' ? '1px solid var(--stroke)' : '',
   };

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         let file: File | undefined = e.target.files[0];

         const reader = new FileReader();

         reader.onload = (e: ProgressEvent<FileReader>) => {
            setSelectedImage(e.target?.result as string);

            dispatch(userImage(selectedImage));
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
               <div className={styles.file}>
                  <label htmlFor="fileInput" className={styles.fileLabel}>
                     <img
                        src={
                           selectedImage
                              ? selectedImage
                              : '../../../images/png/no-image.png'
                        }
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
               {props === 'newUser' && (
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
               )}
               {props === 'editUser' && (
                  <input
                     type="text"
                     className={styles.name}
                     placeholder="ФИО"
                     style={styleForPopup}
                     defaultValue={userName}
                     {...register('name', { required: true })}
                  />
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
            {/* {errors.name && <span>This field is required</span>} */}
         </form>
      </div>
   );
};
