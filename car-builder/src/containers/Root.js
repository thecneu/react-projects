import React from 'react';
import { Provider } from 'react-redux';
import { getFilterList } from '../reducers';
import configStore from '../configStore';
import data from '../data/db';
import App from '../components/App';

const store = configStore({ cars: data, filter: {} });

const Root = () => (
	<Provider store={store}>
		<App filterList={getFilterList(data)} />
	</Provider>
)

export default Root;