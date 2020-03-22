import { combineReducers } from 'redux';
import { users } from '../reducers/users';
import { firebaseReducer } from 'react-redux-firebase';

export const rootReducer: any = combineReducers({
  users: users,
  firebase: firebaseReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
