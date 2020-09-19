import { InitialStateUsersType, PUT_USER, LOGOUT_USER, UserActionTypes } from '../types'

const initialState: InitialStateUsersType = {
  user: null,
}

export function users(state = initialState, action: UserActionTypes): InitialStateUsersType {
  switch (action.type) {
    case PUT_USER:
      return { ...state, user: action.payload }
    case LOGOUT_USER:
      return { ...state, user: null }
    default:
      return state
  }
}
