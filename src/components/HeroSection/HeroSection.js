import React from 'react';
import { Button } from '../';
import styles from './HeroSection.module.css';
import cx from 'classnames';
import { bindClass as bindClassMethod } from '../../utils/utilities';

const bindClass = bindClassMethod.bind(styles);

function HeroSection() {
	return (
		<div className={bindClass(["hero-container"])}>
			<video src="./videos/video-1.mp4" autoPlay loop muted />
			<h1>ADVENTURE AWAITS</h1>
			<p>What are you waiting for?</p>
			<div className={bindClass(["hero-btns"])}>
				<Button 
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					GET STARTED
				</Button>
				<Button
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					WATCH  TRAILER <i className={cx("far", "fa-play-circle", styles["fa-play-circle"])} />
				</Button>
			</div>
		</div>	
	);
}

export default HeroSection;