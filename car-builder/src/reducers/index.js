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

export const carBuilder = (state = {}, action) => {
	switch(action.type) {
		case 'SET_FILTER':
			return {
				...state,
				filter: {
					filter: action.filter,
					value: action.value	
				}				
			};
		default:
			return state;
	}
}