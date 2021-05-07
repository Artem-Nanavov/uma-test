import React from 'react';
import {IList, IListFashion} from 'types/homePage';
import Slider from 'react-slick';
import styles from './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
	dots: false,
	centerMode: false,
	infinite: false,
	slidesToShow: 4,
	speed: 500,
	rows: 2,
	className: styles.slider,
	autoplay: true,
	responsive: [
		{
			breakpoint: 860,
			settings: {
				rows: 1,
				slidesToShow: 3,
			},
		},
	],
};

interface ISelection {
	list: IListFashion;
}

const Selection = ({
	list,
}: ISelection) => (
	<div className={styles.selection}>
		<img src={list.imgUrl} alt="" />

		<Slider {...settings}>
			{
				list.listFashionProd.list.map((_list: IList) => (
					<div key={_list.id} className={styles.selection__product}>
						<div className={styles.selection__info}>
							<p className={styles.selection__shopName}>{_list.uproduct.shopName}</p>

							<img src={_list.imgUrl} alt="" />

							<p className={styles.selection__price}>{_list.uproduct.price}</p>
						</div>

						<a className={styles.selection__link} href={_list.uproduct.xref}>В магазин</a>
					</div>
				))
			}
		</Slider>
	</div>
);

export default Selection;
