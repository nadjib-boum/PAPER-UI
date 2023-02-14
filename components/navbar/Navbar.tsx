import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

import styles from './Navbar.module.scss';


export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <span>journal</span>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">pages</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">business</a>
          </li>
          <li>
            <a href="#">travel</a>
          </li>
        </ul>
      </div>
      <div className={styles.socialLinks}>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
