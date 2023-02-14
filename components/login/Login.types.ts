import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

export type LoginData = {
  account: string;
  password: string;
}

export type PassLoginProps = {
  loginData: LoginData;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  styles: {
    [key: string]: string
  };
}

export type SMSLoginProps = {
  styles: {
    [key: string]: string
  };
  phoneState: [string, Dispatch<SetStateAction<string>>];
}