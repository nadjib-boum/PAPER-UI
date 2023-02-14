import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export const layoutsSlice = createSlice({
  name: 'layouts',
  initialState: {
    navTop: 0
  },
  reducers: {
    setTopNav: (state, action: PayloadAction<number>) => {
      state.navTop = action.payload;
    }
  }
});

export const { setTopNav } = layoutsSlice.actions;
export default layoutsSlice.reducer;