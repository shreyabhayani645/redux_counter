import { configureStore } from '@reduxjs/toolkit';
import  counterSlice  from './reducer/Counterslice';

export const store = configureStore({
  reducer: {
     counter:counterSlice,
  },
})