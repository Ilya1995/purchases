import { PUT_USER, PutUserActionType, UserType } from '../types';

export const putUser = (user: UserType): PutUserActionType => {
  return { type: PUT_USER, payload: user };
};
