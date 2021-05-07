import {IListFashion, IUserInfo} from 'types/homePage';
import {createAction, createCustomAction} from 'typesafe-actions';
import * as homePageActionTypes from './constants';

export const setIsLoadingPage = createCustomAction(homePageActionTypes.SET_IS_LOADING_HOME_PAGE,
	(isLoading: boolean) => ({isLoading}));

export const getUserInfoSaga = createAction(homePageActionTypes.GET_USER_INFO_SAGA)();

export const setUserInfo = createCustomAction(homePageActionTypes.SET_USER_INFO,
	(userInfo: IUserInfo) => ({userInfo}));

export const getListFilteredFashion = createCustomAction(homePageActionTypes.GET_LIST_FILTERED_FASHION,
	(styleUserMnem: string, page: number | string, classId: string | number) => ({styleUserMnem, page, classId}));

export const setListFilteredFashion = createCustomAction(homePageActionTypes.SET_LIST_FILTERED_FASHION,
	(listFilteredFashion: IListFashion[], page: number, totalPages: number) => ({listFilteredFashion, page, totalPages}));

export const loadMoreListFilteredFashion = createCustomAction(homePageActionTypes.LOAD_MORE_LIST_FILTERED_FASHION,
	(listFilteredFashion: IListFashion[], page: number) => ({listFilteredFashion, page}));

export const loadMoreListFilteredFashionSaga = createCustomAction(homePageActionTypes.LOAD_MORE_LIST_FILTERED_FASHION_SAGA,
	(styleUserMnem: string, page: number | string, classId: string | number) => ({styleUserMnem, page, classId}));

export const loadMoreSerLoader = createCustomAction(homePageActionTypes.LOAD_MORE_SET_LOADER,
	(isLoading: boolean) => ({isLoading}));
