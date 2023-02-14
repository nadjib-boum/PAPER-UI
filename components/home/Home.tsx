import { useRef, useLayoutEffect } from 'react';
import { useSelector_ } from '../../redux/hooks';
import AppLayout from '../../layouts/appLayout/AppLayout';
import Navbar from '../navbar/Navbar';
import styles from './Home.module.scss';


export function HomePage () {

  const homeRef = useRef<HTMLDivElement> (null);

  const topNav = useSelector_((state) => state.layouts.navTop);

  useLayoutEffect(() => {
    if (homeRef.current) homeRef.current.style.top = `${topNav}px`; 
  }, [topNav]);
  
  return (
    <div className={styles.home} ref={homeRef}>
      <Navbar />
    </div>
  )
}


export default function HomeLayout () {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
}
