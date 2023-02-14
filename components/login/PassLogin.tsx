import type { PassLoginProps } from "./Login.types";

export default function PassLogin ({ styles, loginData, handleChange }: PassLoginProps) {
  const { account, password } = loginData;
  return (
    <>
      <div className={styles.formRow}>
        <label htmlFor="">Email / Phone</label>
        <input type="text" name='account' placeholder='Email Or Phone' value={account} onChange={handleChange} />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="">Password</label>
        <input type="password" name='password' placeholder='Password' value={password} onChange={handleChange} />
      </div>
    </>
  );
}