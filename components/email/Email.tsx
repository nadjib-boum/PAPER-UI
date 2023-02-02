import styles from './Email.module.scss';

export default function Email () {
  return (
    <div className={styles.emailContact}>
      <div className='container'>
        <div className={`row ${styles.row}`}>
          <div className={styles.heading}>
            <span>365 Magazine Straight To Your Inbox.</span>
          </div>
          <div>
            <p>Sign up to our weekly newsletter to be the first to know what's on in South East</p>
          </div>
        </div>
        <div className={styles.inputRow}>
          <form>
            <div>
              <input type="email" name="email" id="emailInput" placeholder='Your Email Address' />
            </div>
            <div>
              <input type="submit" name='Subscribe' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}