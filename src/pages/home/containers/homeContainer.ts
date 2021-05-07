import {connect} from 'react-redux';
import HomePage from '../index';
import {getUserInfoSaga, getListFilteredFashion} from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
	getUserInfoSaga,
	getListFilteredFashion,
};

const HomePageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomePage);

export default HomePageContainer;
