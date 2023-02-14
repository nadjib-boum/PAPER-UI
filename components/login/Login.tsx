import { useState, FormEvent } from 'react';
import { useDispatch_ } from '../../redux/hooks';
import { passLogin } from '../../redux/slices/auth/auth.slice';
import AppLayout from '../../layouts/appLayout/AppLayout';
import PassLogin from './PassLogin';
import SMSLogin from './SMSLogin';
import type { LoginData } from './Login.types';
import styles from './Login.module.scss';

export function Login () {

  const dispatch = useDispatch_ ();

  const initialLoginData: LoginData = { account: '', password: '' };
  const [ loginData, setLoginData ] = useState<LoginData> (initialLoginData);
  const [ phone, setPhone ] = useState<string>('');
  const [ isSMS, setIsSMS ] = useState<boolean>(false);
  const handleChange = (e: FormEvent) : void => {
    const { name, value } = e.target as HTMLInputElement;
    setLoginData ((state) => ({...state, [name]: value}))
  }
  const handleClick = (e: FormEvent) => {
    setIsSMS ((state) => !state);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault ();
    dispatch (passLogin (loginData));
  }

  return (
    <div className={`${styles.login}`}>
      <div className={`${styles.loginForm}`}>
        <form onSubmit={handleSubmit}>
          {
            isSMS?
            <SMSLogin styles={styles} phoneState={[phone, setPhone]} />
            :
            <>
              <PassLogin styles={styles} loginData={loginData} handleChange={handleChange} />
            </>
          }
          <div className={`${styles.formOptions}`}>
            {
              !isSMS ?
              <>
                <span>Forgot your password? <a href="#">Reset It</a></span>
                <span>Don't have an account? <a href="#">Register Now</a></span>
                <span>Have a phone number? <a href="#" onClick={handleClick}>Login By Phone</a></span>
              </>
              :
                <span>Have an account? <a href="#" onClick={handleClick}>Login With Account</a></span>
            }
            
          </div>
          <div className={`${styles.formAction}`}>
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function LoginLayout () {
  return (
    <AppLayout>
      <Login />
    </AppLayout>
  );
}

