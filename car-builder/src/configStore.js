import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducer from './reducers';

const configStore = (defaultState) => {
	return createStore(
		reducer, 
		defaultState,
		applyMiddleware(createLogger())
	);
}

export default configStore;