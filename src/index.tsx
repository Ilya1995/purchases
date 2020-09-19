import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { App } from './App'
import { rootReducer } from './reducers'
import { fbConfig } from './config'
import './index.css'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}
firebase.initializeApp(fbConfig)
let initialState = { users: { user: null } }
if (typeof Storage !== 'undefined' && localStorage.user) {
  let oldStateUser = JSON.parse(localStorage.user)
  initialState = { users: { user: oldStateUser } }
}
const store = createStore(rootReducer, initialState, composeWithDevTools())
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)
