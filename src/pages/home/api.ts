import axios from 'axios';

export const getUserInfoApi = (id: string) => axios.get(`https://looks.umastyle.club/custapi/allrest/fashion/publicuser?mnem=${id}`);

export const getImg = (
	pictId: string,
	width: number,
	height: number,
) => `https://looks.umastyle.club/liveimg/${pictId}?mode=pad&scale=both&format=jpeg&w=${width}&h=${height}`;

export const getListFilteredFashion = (
	styleUserMnem: string,
	page: number | string,
	classId: number | string,
) => axios.get(
	// eslint-disable-next-line max-len
	`https://looks.umastyle.club/custapi/allrest/fashion/listfilteredfashion?styleUserMnem=${styleUserMnem}&page=${page}&classId=${classId}`,
);

export const getListFashionProd = (
	fashionId: number | string,
) => axios.get(`https://looks.umastyle.club/custapi/allrest/fashion/listfashionprod?fashionId=${fashionId}`);
