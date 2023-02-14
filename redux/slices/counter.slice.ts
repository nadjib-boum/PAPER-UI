import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const counterSlice = createSlice({
  name: 'counter', // [1] State Name
  initialState: { // [2] State Initial Values
    value: 0, 
  }
  ,
  reducers: { // [3] The Actions We Use To Handle The State
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // [4] Export The Actions
export default counterSlice.reducer; // [5] Export The State Reducer