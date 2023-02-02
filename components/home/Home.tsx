import Image from 'next/image';
import { Rubik_Spray_Paint } from '@next/font/google';
import styles from './Home.module.scss';
import Posts from '../posts/Posts';
import Email from '../email/Email';
import Search from '../../public/Icons/Search.svg'
import Menu from '../../public/Icons/Menu.svg'


const rubik_spray_paint = Rubik_Spray_Paint({ weight: '400', subsets: ['latin-ext'] });

function MenuButton ({ children }: any) {
  return (
    <div  className={styles.menuIcon + ' flex-center'}>
      { children }
    </div>
  );
}

export default function HomePage () {
  return (
    <div className={styles.home}>
      <div className={styles.homeIcons}>
        <MenuButton>
          <Image src={Menu} height={20} width={20} alt='Menu' />
        </MenuButton>
        <MenuButton>
          <Image src={Search} height={20} width={20} alt='Search' />
        </MenuButton>
      </div>
      <div className={`${styles.fancyText} ${rubik_spray_paint.className}`}>
        <span>365 MAG</span>
      </div>
      <Posts />
      <Email />
    </div>
  )
}
