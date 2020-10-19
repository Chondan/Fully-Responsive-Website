import React from 'react';
import styles from './Cards.module.css';
import { bindClass as b } from '../../utils/utilities';
import { CardItem } from '../';

const bindClass = b.bind(styles);

function Cards() {
	return (
		<div className={bindClass(["cards"])}>
			<h1>Check out these EPIC Destinations!</h1>
			<div className={bindClass(["cards__container"])}>
				<div className={bindClass(["cards__wrapper"])}>
					<ul className={bindClass(["cards__items"])}>
						<CardItem
							src="images/img-9.jpg"
							text="Explore the hidden waterfall deep inside the Amazon Jungle"
							label="Adventure"
							path="/Fully-Responsive-Website/products/imgs/img-9"
						 />
						 <CardItem
							src="images/img-2.jpg"
							text="Travel through the Islands of Bali in a Pivate Cruise"
							label="Luxury"
							path="/Fully-Responsive-Website/products/imgs/img-2"
						 />
					</ul>
					<ul className={bindClass(["cards__items"])}>
						<CardItem
							src="images/img-3.jpg"
							text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
							label="Mystery"
							path="/Fully-Responsive-Website/products/imgs/img-3"
						 />
						 <CardItem
							src="images/img-4.jpg"
							text="Experience Football on Top of the Himilayan Mountains"
							label="Adventure"
							path="/Fully-Responsive-Website/products/imgs/img-4"
						 />
						 <CardItem
							src="images/img-8.jpg"
							text="Ride through the Sahara Desert on a guided camel tour"
							label="Adrenaline"
							path="/Fully-Responsive-Website/products/imgs/img-8"
						 />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;