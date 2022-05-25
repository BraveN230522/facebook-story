import { combineReducers } from 'redux';
import { AnyAction, Reducer } from '@reduxjs/toolkit';

import homeReducer from './home';
export * from './home';

const productReducer = combineReducers({
  home: homeReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  // if (action.type === RESET) {
  //   // reset state
  //   state = {} as RootState;
  //   // reset local storage
  //   localStorage.clear();
  // }
  return productReducer(state, action);
};
export default rootReducer;
