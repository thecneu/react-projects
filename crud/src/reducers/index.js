import { combineReducers } from 'redux'
import articles from './articles'
import sort from './sort'

const reducer = combineReducers({
  articles,
  sort
})

export default reducer
