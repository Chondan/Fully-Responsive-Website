import cx from 'classnames';

export function bindClass(classNameArray) {
	const arr = classNameArray.map(className => this[className]);
	return cx(...arr);
}