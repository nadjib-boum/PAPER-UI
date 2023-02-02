import { useEffect, useState } from "react";
import { Roboto } from '@next/font/google';
import HeadTag from "../head/Head";


const roboto = Roboto ({
  weight: ['300', '400', '700'],
  subsets: ['latin']
});

export default function AppLayout ({ children }: any) {

  return (
    <>

      <HeadTag />

      <div className={`app ${roboto.className}`}>

        { children }

      </div>
    
    </>
  );
}
