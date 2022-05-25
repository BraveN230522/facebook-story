import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

interface IState {
  mobile: boolean;
}

const initialState: IState = {
  mobile: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    resetHome: () => {
      return initialState;
    },
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.mobile = action.payload;
    },
  },
});

export const { resetHome, setMobile } = homeSlice.actions;

export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;
