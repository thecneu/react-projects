import { SET_USER, USER_LOGGED_IN, USER_AUTHORIZING, MESSAGES_RECEIVE } from './reducers'
import firebase from '../firebase'

const message = (msg, user) => ({
  user,
  text: msg,
  time: Date.now()
})

export const addMessage = (msg) => (dispatch, getState) => {
  const key = firebase.database().ref('messages').push()
  key.set(message(msg, getState().user))
}

export const getMessages = () => (dispatch) => {
  firebase.database().ref('messages').on('value', (snapshot) => {
    dispatch(messagesRecieved(snapshot.val()))
  })
}

export const login = (user) => (dispatch) => {
  dispatch(authorizing())
  console.log(firebase.auth().getUid())
  firebase.auth().signInAnonymously()
    .then(() => {
      dispatch(setUser(user))
      dispatch(loggedIn())
    })
    .catch(err => {
      console.log(err)
      dispatch(firebaseError(err))
    })
}

export const checkUser = () => (dispatch) => {
  if (firebase.auth().getUid()) {
    dispatch(loggedIn())
  }
}

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const authorizing = () => ({
  type: USER_AUTHORIZING
})

export const loggedIn = () => ({
  type: USER_LOGGED_IN
})

export const messagesRecieved = (msgs) => ({
  type: MESSAGES_RECEIVE,
  payload: msgs
})

export const firebaseError = (err) => ({
  type: 'FIREBASE_ERROR',
  payload: err
})