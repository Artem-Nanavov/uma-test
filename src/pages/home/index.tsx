import React from 'react';
import Header from './components/header';
import Selections from './containers/selectionsContainer';
import UserInfoContainer from './containers/userInfoContainer';
import styles from './styles.scss';

interface IHomePage {
	getUserInfoSaga: () => void;
	getListFilteredFashion: (
		styleUserMnem: string,
		page: number | string,
		classId: string | number
	) => void;
}

const Home = ({
	getUserInfoSaga,
	getListFilteredFashion,
}: IHomePage) => {
	React.useEffect(() => {
		getUserInfoSaga();
		getListFilteredFashion('tanya_tilcha', 1, 184);
	}, []);

	return (
		<div className={styles.home}>
			<div className={styles.home__wrap}>
				<UserInfoContainer />

				<div className={styles.content}>
					<Header />

					<Selections />
				</div>
			</div>
		</div>
	);
};

export default Home;
