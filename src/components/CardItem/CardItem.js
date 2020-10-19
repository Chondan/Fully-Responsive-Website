import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardItem.module.css';
import { bindClass as b } from '../../utils/utilities';

const bindClass = b.bind(styles);

function CardItem({ src, text, label, path }) {
	return (
		<>
			<li className={bindClass(["cards__item"])}>
				<Link to={path} className={bindClass(["cards__item__link"])} >
					<figure data-category={label} className={bindClass(["cards__item__pic-wrap"])}>
						<img src={src} alt="Travel" className={bindClass(["cards__item__img"])} />
					</figure>
					<div className={bindClass(["cards__item__info"])}>
						<h5 className={bindClass(["cards__item__text"])}>
							{text}
						</h5>
					</div>
				</Link>
			</li>
		</>
	);
}

export default CardItem;