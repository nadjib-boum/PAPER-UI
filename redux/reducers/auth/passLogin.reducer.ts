import type { PayloadAction } from '@reduxjs/toolkit';
import type { LoginData } from '../../../components/login/Login.types';
import { postAPI } from '../../../utils/api';

export default function passLoginReducer (state: any, action: PayloadAction<LoginData>) {
  async () => {
    try {
      const res = await postAPI ('login', action);
      console.log (res)
    } catch (err) {
      console.log (err);
    }
  }
}