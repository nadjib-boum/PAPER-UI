import { FormEvent } from 'react';
import type { SMSLoginProps } from './Login.types';

export default function SMSLogin ({ styles, phoneState }: SMSLoginProps) {
  const [phone, setPhone] = phoneState;
  return (
    <>
      <div className={styles.formRow}>
        <label htmlFor="">Phone Number</label>
        <input type="phone" name='phone' placeholder='Password' value={phone} onChange={(e: FormEvent) => setPhone((e.target as HTMLInputElement).value)} />
      </div>
    </>
  );
}