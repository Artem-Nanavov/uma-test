import {
	call, put, takeLatest,
} from 'redux-saga/effects';
import * as homePageActions from './actions';
import {
	getUserInfoApi,
	getImg,
	getListFilteredFashion,
	getListFashionProd,
} from './api';
import * as homePageActionTypes from './constants';

function* getUserInfoSaga() {
	try {
		yield put(homePageActions.setIsLoadingPage(true));
		const res = yield call(getUserInfoApi, 'tanya_tilcha');

		yield put(homePageActions.setUserInfo({...res.data, avatar: getImg(res.data.photoId, 250, 250)}));
	} catch (e) {
		console.log('get user info saga erorr:', e);
	} finally {
		yield put(homePageActions.setIsLoadingPage(false));
	}
}

function* getListFilteredFashionSaga(action: ReturnType<typeof homePageActions.getListFilteredFashion>) {
	try {
		const res = yield call(getListFilteredFashion, action.styleUserMnem, action.page, action.classId);

		const newList: any = [];

		for (const listItem of res.data.list) {
			const _res = yield call(getListFashionProd, listItem.id);

			newList.push({...listItem, listFashionProd: _res.data, imgUrl: getImg(listItem.collagePictId, 486, 648)});
		}

		yield put(homePageActions.setListFilteredFashion(newList, res.data.page, res.data.totalPages));
	} catch (e) {
		console.log('get list filtered fashion saga error:', e);
	}
}

function* loadMoreListFilteredFashionSaga(action: ReturnType<typeof homePageActions.loadMoreListFilteredFashionSaga>) {
	try {
		yield put(homePageActions.loadMoreSerLoader(true));

		const res = yield call(getListFilteredFashion, action.styleUserMnem, action.page, action.classId);
		const newList: any = [];

		for (const listItem of res.data.list) {
			const _res = yield call(getListFashionProd, listItem.id);

			newList.push({...listItem, listFashionProd: _res.data, imgUrl: getImg(listItem.collagePictId, 486, 648)});
		}

		yield put(homePageActions.loadMoreListFilteredFashion(newList, res.data.page));
	} catch (e) {
		console.log('load more list filtered fashion saga error:', e);
	} finally {
		yield put(homePageActions.loadMoreSerLoader(false));
	}
}

export default function* watchEntities() {
	yield takeLatest(homePageActionTypes.GET_USER_INFO_SAGA, getUserInfoSaga);
	yield takeLatest(homePageActionTypes.GET_LIST_FILTERED_FASHION, getListFilteredFashionSaga);
	yield takeLatest(homePageActionTypes.LOAD_MORE_LIST_FILTERED_FASHION_SAGA, loadMoreListFilteredFashionSaga);
}
