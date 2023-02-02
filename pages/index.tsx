import { useState, useEffect } from 'react';
import AppLayout from '../components/appLayout/AppLayout';
import HomePage from '../components/home/Home';

// import { useAppSelector, useAppDispatch } from '../redux/hooks/index';
// import { decrement, increment, incrementByAmount, selectCount } from '../redux/slices/counter.slice';


export default function Home() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();

  return (
    <AppLayout>
      
      <HomePage />

    </AppLayout>
  )
}
