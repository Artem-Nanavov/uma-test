import {RootState} from 'main/index';
import {connect} from 'react-redux';
import Selections from '../components/selections';
import {loadMoreListFilteredFashionSaga} from '../actions';

const mapStateToProps = (state: RootState) => ({
	listFilteredFashion: state.home.listFilteredFashion,
	page: state.home.page,
	totalPage: state.home.totalPages,
	isLoadMore: state.home.isLoadMore,
});

const mapDispatchToProps = {
	loadMoreListFilteredFashionSaga,
};

const HomePageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Selections);

export default HomePageContainer;
