import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import data from './data'
import reducer from './reducers'

const logger = createLogger()
const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    data,
    enhance(
      applyMiddleware(logger)
    )
)

export default store
