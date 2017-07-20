import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './data/reducers'

function configureStore() {
  const store = createStore(reducer, composeWithDevTools(
      applyMiddleware(thunk, logger)
  ))

  return store
}

export default configureStore
