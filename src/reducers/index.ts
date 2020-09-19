import { combineReducers } from 'redux'
import { users } from '../reducers/users'
import { InitialStateUsersType, UserType, ItemType } from '../types'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'

type ProfileType = {
  isLoaded: boolean
  isEmpty: boolean
}

type DBSchema = {
  users: UserType
  purchases: ItemType
  others: ItemType
  [name: string]: any
}

type RootState = {
  users: InitialStateUsersType
  firebase: FirebaseReducer.Reducer<ProfileType, DBSchema>
}

export const rootReducer = combineReducers<RootState>({
  users,
  firebase: firebaseReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>
