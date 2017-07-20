import { combineReducers } from 'redux'

export const SET_USER = 'SET_USER'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_AUTHORIZING = 'USER_AUTHORIZING'
export const MESSAGES_RECEIVE = 'MESSAGES_RECEIVE'

const user = (state = {}, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }
    case USER_AUTHORIZING:
      return {
        ...state,
        authorizing: true
      }
    case USER_LOGGED_IN:
      return {
        ...state,
        authorizing: false,
        authorized: true
      }
    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch(action.type) {
    case MESSAGES_RECEIVE:
      return Object.keys(action.payload || []).map(key => ({key, ...action.payload[key]}))
    default:
      return state
  }
}

const reducer = combineReducers({
  messages,
  user
})

export default reducer