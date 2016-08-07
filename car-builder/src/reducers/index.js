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

export const getCars = ({cars, filter}) => {
	if (filter.filter === '') {
		return cars;
	}
	return cars.filter(car => car[filter.filter] === filter.value)
}

// not sure how to use this since containers/CarList filters out the car list
// necessary for redux
export const filterCars = (state = [], action) => {
	switch(action.type) {
		default:
			return state;
	}
}

const initialFilter = {
	filter: '',
	value: ''
}
export const setFilter = (state = initialFilter, action) => {
	switch(action.type) {
		case 'SET_FILTER':
			return {
				filter: action.filter,
				value: action.value
			};
		default:
			return state;
	}
}