import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from './slices/counter.slice'

const store = configureStore({
  reducer: {
    counter: counterReducer 
  },
  devTools: true,
});  


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(() => store);