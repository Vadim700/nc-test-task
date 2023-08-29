import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

const users: User[] = [
   {
      id: 1,
      photo: '../../../images/png/image-1.png',
      name: 'Кравцова Александра',
      fullName: 'Кравцова Александра Викторовна',
      age: 28,
      sex: 'жен',
      selected: false,
      mark: '../../../images/icons/telegram-icon.png',
   },
   {
      id: 2,
      photo: '../../../images/png/big-image.png',
      name: 'Рожков Денис ',
      fullName: 'Рожков Денис Петрович',
      age: 30,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 3,
      photo: '../../../images/png/image-1.png',
      name: 'Кравцова Александра',
      fullName: 'Кравцова Александра Викторовна',
      age: 28,
      sex: 'жен',
      selected: false,
      mark: '../../../images/icons/Mod.png',
   },
   {
      id: 4,
      photo: '../../../images/png/image-3.png',
      name: 'Диброва Алевтина',
      fullName: 'Диброва Алевтина Хизбулловна',
      age: 26,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 5,
      photo: '../../../images/png/image-4.png',
      name: 'Иванов Дмитрий',
      fullName: 'Иванов Дмитрий Евгеньевич',
      age: 33,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 6,
      photo: '',
      name: 'nosikov@list.ru',
      fullName: 'nosikov@list.ru',
      age: 25,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 7,
      photo: '../../../images/png/image-5.png',
      name: 'Форс Александр',
      fullName: 'Форс Александр Мажорович',
      age: 42,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 8,
      photo: '../../../images/png/image-6.png',
      name: 'Ахмедов Артур',
      fullName: 'Ахмедов Артур Ахматзянович',
      age: 38,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 9,
      photo: '../../../images/png/image-7.png',
      name: 'Блажевич Игорь',
      fullName: 'Блажевич Игорь Неблажевич',
      age: 55,
      sex: 'муж',
      selected: false,
      mark: '',
   },
   {
      id: 10,
      photo: '../../../images/png/image-8.png',
      name: 'Валиева Руфина',
      fullName: 'Валиева Руфина Раисовна',
      age: 33,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 11,
      photo: '../../../images/png/image-9.png',
      name: 'Волошина Виктория',
      fullName: 'Волошина Виктория Эдуардовна',
      age: 29,
      sex: 'жен',
      selected: false,
      mark: '',
   },
   {
      id: 12,
      photo: '../../../images/png/image-9.png',
      name: 'Волошина Виктория',
      fullName: 'Волошина Виктория Эдуардовна',
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

      editUser: (state, action: PayloadAction<number>) => {
         const user = state.list.find((item) => item.id === action.payload);
      },

      toggleUserSelected: (state, action: PayloadAction<number>) => {
         state.list[action.payload - 1].selected =
            !state.list[action.payload - 1].selected;
      },

      setSelectAll: (state, action: PayloadAction<boolean>) => {
         state.list.map((item) => (item.selected = !action.payload));
      },

      deleteSelectedUsers: (state, action: PayloadAction<number[]>) => {
         console.log(action.payload, '>>> action.payload');
         state.list = [...state.list].filter(
            (item) => !action.payload.includes(item.id),
         );
      },
   },
});

export const {
   // fetchUsers,
   removeUser,
   editUser,
   toggleUserSelected,
   setSelectAll,
   deleteSelectedUsers,
} = userSlice.actions;

export default userSlice.reducer;
