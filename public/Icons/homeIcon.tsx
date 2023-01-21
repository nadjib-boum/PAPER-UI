import Image from 'next/image';
import icon from '../images/home-icon.png';

export default function HomeIcon ({iconId}: any) {
  return (
    <Image src={icon} alt='home-icon' id={iconId} />
  );
}