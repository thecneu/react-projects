import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getFilterList, carBuilder } from './reducers';
import App from './components/App';
import data from './data/db';

const defaultState = {
	cars: data,
	filter: { filter: '', value: '' }
};

const store = createStore(
	carBuilder, 
	defaultState,
	window.devToolsExtension && window.devToolsExtension()
);

render(
	<Provider store={store}>
		<App filterList={getFilterList(data)} />
	</Provider>,
	document.getElementById('root')
);	