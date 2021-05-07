import React from 'react';
import Arrow from 'resources/icons/arrow';
import {IUserInfo} from 'types/homePage';
import styles from './styles.scss';

interface IUInfo {
	userInfo: IUserInfo;
}

const MyInfo = ({
	userInfo,
}: IUInfo) => {
	console.log();

	return (
		<div className={styles.userInfo}>
			<div className={styles.userInfo__mainInfo}>
				<img src={userInfo.avatar as string} alt="" />

				<p>{userInfo.extUserUrl}</p>
			</div>

			<div className={styles.userInfo__links}>
				<p>Ссылки автора</p>

				<div className={styles.userInfo__border} />

				<ul>
					{userInfo.mysite && (
						<li>
							<a href={userInfo.mysite}>Мой сайт</a>

							<Arrow />
						</li>
					)}

					{userInfo.phone && (
						<li>
							<p>WhatsApp</p>

							<Arrow />
						</li>
					)}

					{userInfo.email && (
						<li>
							<a href={`mailto:mailto:${userInfo.email}`}>Сотрудничество</a>

							<Arrow />
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default MyInfo;
