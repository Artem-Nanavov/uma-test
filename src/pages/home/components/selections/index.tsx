import React from 'react';
import {IListFashion} from 'types/homePage';
import styles from './styles.scss';
import Selection from '../selection';

interface ISelections {
	listFilteredFashion: IListFashion[] | null;
	loadMoreListFilteredFashionSaga: (
		styleUserMnem: string,
		page: number | string,
		classId: string | number,
	) => void;
	page: number;
	totalPage: number;
	isLoadMore: boolean;
}

const Selections = ({
	page,
	totalPage,
	isLoadMore,
	listFilteredFashion,
	loadMoreListFilteredFashionSaga,
}: ISelections) => (
	<div className={styles.selections}>
		{
			listFilteredFashion && listFilteredFashion.map((list) => (
				<Selection key={list.id} list={list} />
			))
		}

		{
			isLoadMore && (
				<p className={styles.loading}>Loading...</p>
			)
		}

		{
			listFilteredFashion && page !== totalPage && (
				<button
					className={
						`${styles.selections__loadMore} ${isLoadMore ? styles.disabled : ''}`
					}
					disabled={isLoadMore}
					type="button"
					onClick={() => loadMoreListFilteredFashionSaga('tanya_tilcha', page + 1, 184)}
				>
					Загрузить еще
				</button>
			)
		}
	</div>
);

export default Selections;
