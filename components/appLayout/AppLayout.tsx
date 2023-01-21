import { useEffect, useState } from "react";
export default function AppLayout ({ children }: any) {


  useEffect (() => {
    

  }, []);

  return (
    <>
      <div className='app'>


        { children }


      </div>
    </>
  )
}
