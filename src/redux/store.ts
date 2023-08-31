import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import noteSlice from './slices/noteSlice';

const store = configureStore({
   reducer: {
      users: userSlice,
      notes: noteSlice,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
