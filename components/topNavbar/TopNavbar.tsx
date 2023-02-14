import { useLayoutEffect, useRef, useEffect } from 'react';
import { useDispatch_ } from '../../redux/hooks';
import { setTopNav } from '../../redux/slices/layouts/layouts.slice';
import styles from './TopNavbar.module.scss';

export default function TopNavbar () {
  
  const dispatch = useDispatch_ ();

  const topNavRef = useRef<HTMLDivElement>(null);


  useLayoutEffect (() => {
    dispatch (setTopNav(topNavRef.current?.offsetHeight || 0));
  }, [])

  return (
    <div className={styles.topNavbar} ref={topNavRef}>
      <div className={styles.rightNav}>
        <ul>
          <li>
            <a href="#">LOGIN</a>
          </li>
          <li>
            <a href="#">REGISTER</a>
          </li>
        </ul>
      </div>
    </div>
  );
}