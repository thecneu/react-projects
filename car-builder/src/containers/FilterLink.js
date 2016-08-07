import { connect } from 'react-redux';
import { setFilter } from '../actions';
import ListLink from '../components/ListLink';

const mapStateToProps = (state, ownProps) => ({
	active: state.filter.filter === ownProps.filter 
		&& state.filter.value === ownProps.children
})

const mapDispatchToProps = (dispatch) => ({
	filterClick(filter, value = '') {
		if (filter === '') {
			dispatch({type: 'RESET_FILTER'})
		} else {
			dispatch(setFilter(filter, value));
		}		
	}
});

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListLink);

export default FilterLink;