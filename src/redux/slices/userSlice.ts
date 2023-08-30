import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

const users: User[] = [
   {
      id: 1,
      photo: '../../../images/png/image-1.png',
      name: 'Кравцова Александра Викторовна',
      age: 28,
      sex: 'жен',
      selected: false,
      mark: '../../../images/icons/telegram-icon.png',
   },
   {
      id: 2,
      photo: '../../../images/png/big-image.png',
      name: 'Рожков Денис Петрович',
      age: 30,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 3,
      photo: '../../../images/png/image-1.png',
      name: 'Кравцова Александра Викторовна',
      age: 28,
      sex: 'жен',
      selected: false,
      mark: '../../../images/icons/Mod.png',
   },
   {
      id: 4,
      photo: '../../../images/png/image-3.png',
      name: 'Диброва Алевтина Хизбулловна',
      age: 26,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 5,
      photo: '../../../images/png/image-4.png',
      name: 'Иванов Дмитрий Евгеньевич',
      age: 33,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 6,
      photo: '',
      name: 'nosikov@list.ru',
      age: 25,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 7,
      photo: '../../../images/png/image-5.png',
      name: 'Форс Александр Мажорович',
      age: 42,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 8,
      photo: '../../../images/png/image-6.png',
      name: 'Ахмедов Артур Ахматзянович',
      age: 38,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 9,
      photo: '../../../images/png/image-7.png',
      name: 'Блажевич Игорь Неблажевич',
      age: 55,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 10,
      photo: '../../../images/png/image-8.png',
      name: 'Валиева Руфина Раисовна',
      age: 33,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 11,
      photo: '../../../images/png/image-9.png',
      name: 'Волошина Виктория Эдуардовна',
      age: 29,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 12,
      photo: '../../../images/png/image-9.png',
      name: 'Волошина Виктория Эдуардовна',
      age: 29,
      sex: 'жен',
      selected: false,
      mark: '',
   },
];

type UserState = {
   list: User[];
};

const initialState: UserState = {
   list: users,
};

export const userSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      removeUser: (state, action: PayloadAction<number>) => {
         state.list = state.list.filter((item) => item.id !== action.payload);
      },

      editUser: (state, action: PayloadAction<any>) => {
         const { currentId, name, age, sex } = action.payload;
         const editedUser = state.list.find(
            (item) => item.id === Number(currentId),
         );
         if (editedUser) {
            editedUser.name = name;
            editedUser.age = age;
            editedUser.sex = sex;
         }
      },

      toggleUserSelected: (state, action: PayloadAction<number>) => {
         state.list[action.payload - 1].selected =
            !state.list[action.payload - 1].selected;
      },

      setSelectAll: (state, action: PayloadAction<boolean>) => {
         state.list.map((item) => (item.selected = !action.payload));
      },

      deleteSelectedUsers: (state, action: PayloadAction<number[]>) => {
         state.list = [...state.list].filter(
            (item) => !action.payload.includes(item.id),
         );
      },

      addNewUser: (state, action: PayloadAction<any>) => {
         state.list.push(action.payload);
      },
   },
});

export const {
   removeUser,
   editUser,
   toggleUserSelected,
   setSelectAll,
   deleteSelectedUsers,
   addNewUser,
} = userSlice.actions;

export default userSlice.reducer;
