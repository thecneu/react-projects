import { combineReducers } from 'redux'
import { messages, meta } from './messages'

const chatroom = combineReducers({
  messages,
  meta
})

export default chatroom