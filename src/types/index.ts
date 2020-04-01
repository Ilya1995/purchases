export const PUT_USER = 'PUT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export type UserAuthType = {
  login: string;
  password: string;
};

export interface UserType extends UserAuthType {
  name: string;
}

export type UserFirebaseType = {
  key: string;
  value: UserAuthType;
};

export type ItemType = {
  completed: boolean;
  text: string;
  timestamp: number;
};

export type ItemFirebaseType = {
  key: string;
  value: ItemType;
};

export type InitialStateUsersType = {
  user: UserType | null;
};

export type PutUserActionType = {
  type: typeof PUT_USER;
  payload: UserType;
};

export type LogoutUserActionType = {
  type: typeof LOGOUT_USER;
};

export type UserActionTypes = PutUserActionType | LogoutUserActionType;
