import { connect } from 'react-redux';
import { getCars } from '../reducers';
import List from '../components/List';

const mapStateToProps = (state) => ({
	cars: getCars(state)
})

export default connect(
	mapStateToProps,
	{}
)(List);