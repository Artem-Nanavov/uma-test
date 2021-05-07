import {IListFashion, IUserInfo} from 'types/homePage';
import {ActionType, getType} from 'typesafe-actions';

import * as actions from './actions';

export type PricePageState = Readonly<{
	userInfo: IUserInfo;
	isLoadingHomePage: boolean;
	page: number;
	totalPages: number;
	listFilteredFashion: null | IListFashion[];
	isLoadMore: boolean;
}>;

const initialState: PricePageState = {
	userInfo: {
		id: null,
		fullName: null,
		email: null,
		mysite: null,
		phone: null,
		photoId: null,
		extUserUrl: null,
		aboutMe: null,
		avatar: null,
	},
	page: 1,
	totalPages: 1,
	isLoadingHomePage: true,
	listFilteredFashion: null,
	isLoadMore: false,
};

export type PricePageActions = ActionType<typeof actions>;

export default (
	state = initialState,
	action: PricePageActions,
): PricePageState => {
	switch (action.type) {
	case getType(actions.setIsLoadingPage):
		return {
			...state,
			isLoadingHomePage: action.isLoading,
		};
	case getType(actions.setUserInfo):
		return {
			...state,
			userInfo: action.userInfo,
		};
	case getType(actions.setListFilteredFashion):
		return {
			...state,
			listFilteredFashion: action.listFilteredFashion,
			page: action.page,
			totalPages: action.totalPages,
		};
	case getType(actions.loadMoreListFilteredFashion):
		return {
			...state,
			listFilteredFashion: [
				...state.listFilteredFashion as IListFashion[],
				...action.listFilteredFashion,
			],
			page: action.page,
		};
	case getType(actions.loadMoreSerLoader):
		return {
			...state,
			isLoadMore: action.isLoading,
		};
	default:
		return state;
	}
};
