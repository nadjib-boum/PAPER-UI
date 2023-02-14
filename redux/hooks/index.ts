import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useDispatch_: () => AppDispatch = useDispatch;
export const useSelector_: TypedUseSelectorHook<RootState> = useSelector;