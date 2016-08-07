import _ from 'lodash';

// gets filter by: list
export const getFilterList = (cars) => {
	if (!cars.length) {
		return;
	}

 	const filters = _.flatten(['category', 'type', 'year'].map(filter => {
 		return { 
 			filter, 
 			values: _.uniq(_.map(cars, filter))
 		}
 	}));

 	return filters;
}

// selector for cars
export const getCars = ({cars, filter}) => {
	if (filter.filter === '') {
		return cars;
	}
	return cars.filter(car => car[filter.filter] === filter.value)
}

const filterDefaultState = {
	filter: '', 
	value: '' 
}
const setFilter = (state = filterDefaultState, action) => {
	switch(action.type) {
		case 'SET_FILTER':
			return {
				filter: action.filter,
				value: action.value
			};
		case 'RESET_FILTER':
			return filterDefaultState;
		default: 
			return state;
	}
}

const carBuilder = (state = {}, action) => {
	switch(action.type) {		
		default:
			return {
				...state,
				filter: setFilter(state, action) // to get default using defaults -- need a different way to do this
			};
	}
}

export default carBuilder;