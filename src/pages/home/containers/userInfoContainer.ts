import {RootState} from 'main/index';
import {connect} from 'react-redux';
import UserInfo from '../components/userInfo';

const mapStateToProps = (state: RootState) => ({
	userInfo: state.home.userInfo,
});

const mapDispatchToProps = {};

const UserInfoContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UserInfo);

export default UserInfoContainer;
