import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import cx from 'classnames';
import { Button } from '../';
import { bindClass as bindClassMethod } from '../../utils/utilities';

const bindClass = bindClassMethod.bind(styles);

function NavLink({ to, onClick, ...props }) {
	return (
		<li className={bindClass(["nav-item"])}>
			<Link to={to} className={bindClass(to === "/sign-up" ? ["nav-links-mobile", "nav-links"] : ["nav-links"])} onClick={onClick}>
				{props.children}
			</Link>
		</li>		
	);
}

const NAV_LINKS = ["home", "services", "products", "sign-up"];

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(null);

	const closeMobileMenu = () => setClick(false);
	const showButton = () => window.innerWidth <= 960 ? setButton(false) : setButton(true);

	useEffect(() => {
		window.addEventListener("load", showButton);
		window.addEventListener("resize", showButton);
		return () => {
			window.removeEventListener("resize", showButton);
			window.removeEventListener("load", showButton);
		};
	}, []);

	return (
		<>
			<nav className={bindClass(["nav-bar"])}>
				<div className={bindClass(["navbar-container"])}>
					<Link to="/" className={bindClass(["navbar-logo"])} onClick={closeMobileMenu} >
						TRVL <i className="fab fa-typo3" />
					</Link>
					<div 
						className={bindClass(["menu-icon"])}
						onClick={() => setClick(click => !click)}
					>
						<i className={click ? cx("fas", "fa-times", styles["fa-times"]) : cx("fas", "fa-bars", styles["fa-times"])} />
					</div>
					<ul className={click ? bindClass(["nav-menu", "active"]) : bindClass(["nav-menu"])}>
						{NAV_LINKS.map(link => (
							<NavLink key={link} to={link === "home" ? "/" : `/${link}`} onClick={closeMobileMenu}>
								{link}
							</NavLink>
						))}
					</ul>
					{button && <Button buttonStyle="btn--outline">Sign Up</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;