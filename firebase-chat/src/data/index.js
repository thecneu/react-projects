import { combineReducers } from 'redux';
import chatroom from './chatroom';
import user from './user';

const root = combineReducers({
  chatroom,
  user
})

export default root