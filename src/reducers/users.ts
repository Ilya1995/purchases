import { InitialStateUsersType, PUT_USER, PutUserActionType } from '../types';

const initialState: InitialStateUsersType = {
  user: null
};

export function users(
  state = initialState,
  action: PutUserActionType
): InitialStateUsersType {
  switch (action.type) {
    case PUT_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
