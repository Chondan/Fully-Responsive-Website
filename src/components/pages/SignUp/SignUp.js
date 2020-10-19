import React from 'react';
import styles from './SignUp.module.css';
import { bindClass as b } from '../../../utils/utilities';

const bindClass = b.bind(styles);

function Products() {
	return (
		<h1 className={bindClass(["sign-up"])}>SIGN UP</h1>
	);
}

export default Products;