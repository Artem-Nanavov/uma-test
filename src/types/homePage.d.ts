export interface IUserInfo {
	id: number | null;
	fullName: string | null;
	email: string | null;
	mysite: string | null;
	phone: string | null;
	photoId: number | null;
	extUserUrl: string | null;
	aboutMe: string | null;
	avatar: string | null;
}

export interface IListFashion {
	action: null;
	bloggerInfo: null;
	bloggerUrl: null;
	changeDate: number;
	changeDateStr: string;
	classes: null;
	collagePictId: number;
	collagePictUrl: null;
	count: number;
	createUser: number;
	delta: null;
	id: number;
	imgUrl: string;
	name: string;
	pictId: number;
	sex: string;
	showInApp: null;
	tableName: string;
	tags: null;
	uFashionProductInfos: null;
	uProductInfos: null;
	uposition: number;
	userId: number;
	uview: string;

	listFashionProd: IListFilteredFashion;
}

export interface IList {
	id: number;
	fashionId: number;
	productId: number;
	uposition: number;
	pictId: null;
	changeDate: number;
	imgUrl: string;

	uproduct: {
		id: number;
		cateId: number;
		uposition: number;
		name: string;
		storyText: string;
		pictId: number;
		pictures: number;
		origPictId: number;
		price: number;
		currency: null;
		xref: string;
		shopId: number;
		shopName: string;
		partnerId: null | number;
		uview: string;
		changeDate: number;
		imgUrl: null;
		uClassInfos: null;
		classes: null;
		tableName: string;
		changeDateStr: string;
	}
}

export interface IListFilteredFashion {
	endRecord: number;

	list: IList[];

	maxRecords: 35;
	page: number;
	recordsPerPage: number;
	startRecord: number;
	totalPages: number;
}
