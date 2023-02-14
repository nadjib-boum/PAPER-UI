import { createSlice } from '@reduxjs/toolkit';
import passLoginReducer from '../../reducers/auth/passLogin.reducer';
import { AuthSliceState } from './authSlice.types';

const initialState: AuthSliceState = {
  loginData: { account: '', password: '' }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    passLogin: passLoginReducer
  }
});

export const { passLogin } = authSlice.actions;
export default authSlice.reducer;