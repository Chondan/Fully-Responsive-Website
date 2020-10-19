import React from 'react';
import styles from './Services.module.css';
import { bindClass as b } from '../../../utils/utilities';

const bindClass = b.bind(styles);

function Products() {
	return (
		<h1 className={bindClass(["services"])}>SERVICES</h1>
	);
}

export default Products;