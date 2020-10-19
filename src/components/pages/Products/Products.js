import React from 'react';
import styles from './Products.module.css';
import { bindClass as b } from '../../../utils/utilities';

const bindClass = b.bind(styles);

function Products({ match }) {
	const backgroundImg = `url('/images/${match.params.imgId}.jpg') center center/cover no-repeat`;
	return (
		<h1 style={ match.params.imgId && { background: backgroundImg }} className={bindClass(["products"])}>PRODUCTS</h1>
	);
}

export default Products;