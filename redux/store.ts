import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from './slices/counter.slice'
import layoutsSlice from './slices/layouts/layouts.slice';
import authSlice from './slices/auth/auth.slice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // State Registeration
    layouts: layoutsSlice,
    auth: authSlice
  },
  devTools: true,
});  


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(() => store);