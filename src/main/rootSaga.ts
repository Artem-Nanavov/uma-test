import {all, fork} from 'redux-saga/effects';
import homeSaga from 'pages/home/saga';

export default function* rootSaga() {
	yield all([
		fork(homeSaga),
	]);
}
