import { Roboto } from '@next/font/google';
import HeadTag from "../../components/head/Head";
import TopNavbar from "../../components/topNavbar/TopNavbar";


const roboto = Roboto ({
  weight: ['300', '400', '700'],
  subsets: ['latin']
});

export default function AppLayout ({ children }: any) {

  return (
    <>

      <HeadTag />

      <div className={`app ${roboto.className}`}>

        <TopNavbar />

        { children }

      </div>
    
    </>
  );
}
