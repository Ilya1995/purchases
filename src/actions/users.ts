import {
  PUT_USER,
  LOGOUT_USER,
  PutUserActionType,
  LogoutUserActionType,
  UserType,
} from '../types';

export const putUser = (user: UserType): PutUserActionType => {
  return { type: PUT_USER, payload: user };
};

export const logoutUser = (): LogoutUserActionType => {
  return { type: LOGOUT_USER };
};
