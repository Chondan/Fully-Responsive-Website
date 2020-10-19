import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Footer.module.css';
import { Button } from '../';
import { bindClass as b } from '../../utils/utilities';

const bindClass = b.bind(styles);

function Footer() {
	return (
		<div className={bindClass(["footer-container"])}>
			<section className={bindClass(["footer-subscription"])}>
				<p className={bindClass(["footer-subscription-heading"])}>
					Join the Adventure newsletter to receive our best 
					vacation deals
				</p>
				<p className={bindClass(["footer-subscription-text"])}>
					You can unsubscribe at any time
				</p>
				<div className={bindClass(["input-areas"])}>
					<form className={bindClass(["footer-email-form"])}>
						<input 
							type="email"
							name="email"
							placeholder="Your Email"
							className={bindClass(["footer-input"])}
						 />
						 <Button
						 	buttonStyle="btn--outline"
						 >
						 	Subscribe
						 </Button>
					</form>
				</div>
			</section>
			<div className={bindClass(["footer-links"])}>
				<div className={bindClass(["footer-link-wrapper"])}>
					<div className={bindClass(["footer-link-items"])}>
						<h2>About Us</h2>
						<Link to="/Fully-Responsive-Website/sign-up">How it works</Link>
						<Link to="/Fully-Responsive-Website/">Testimonials</Link>
						<Link to="/Fully-Responsive-Website/">Careers</Link>
						<Link to="/Fully-Responsive-Website/">Investors</Link>
						<Link to="/Fully-Responsive-Website/">Term of Services</Link>
					</div>
					<div className={bindClass(["footer-link-items"])}>
						<h2>Contact Us</h2>
						<Link to="/Fully-Responsive-Website/sign-up">How it works</Link>
						<Link to="/Fully-Responsive-Website/">Testimonials</Link>
						<Link to="/Fully-Responsive-Website/">Careers</Link>
						<Link to="/Fully-Responsive-Website/">Investors</Link>
						<Link to="/Fully-Responsive-Website/">Term of Services</Link>
					</div>
				</div>
				<div className={bindClass(["footer-link-wrapper"])}>
					<div className={bindClass(["footer-link-items"])}>
						<h2>About Us</h2>
						<Link to="/Fully-Responsive-Website/sign-up">How it works</Link>
						<Link to="/Fully-Responsive-Website/">Testimonials</Link>
						<Link to="/Fully-Responsive-Website/">Careers</Link>
						<Link to="/Fully-Responsive-Website/">Investors</Link>
						<Link to="/Fully-Responsive-Website/">Term of Services</Link>
					</div>
					<div className={bindClass(["footer-link-items"])}>
						<h2>Contact Us</h2>
						<Link to="/Fully-Responsive-Website/sign-up">How it works</Link>
						<Link to="/Fully-Responsive-Website/">Testimonials</Link>
						<Link to="/Fully-Responsive-Website/">Careers</Link>
						<Link to="/Fully-Responsive-Website/">Investors</Link>
						<Link to="/Fully-Responsive-Website/">Term of Services</Link>
					</div>
				</div>
				<div className={bindClass(["footer-link-wrapper"])}>
					<div className={bindClass(["footer-link-items"])}>
						<h2>About Us</h2>
						<Link to="/Fully-Responsive-Website/sign-up">How it works</Link>
						<Link to="/Fully-Responsive-Website/">Testimonials</Link>
						<Link to="/Fully-Responsive-Website/">Careers</Link>
						<Link to="/Fully-Responsive-Website/">Investors</Link>
						<Link to="/Fully-Responsive-Website/">Term of Services</Link>
					</div>
					<div className={bindClass(["footer-link-items"])}>
						<h2>Contact Us</h2>
						<Link to="/Fully-Responsive-Website/sign-up">How it works</Link>
						<Link to="/Fully-Responsive-Website/">Testimonials</Link>
						<Link to="/Fully-Responsive-Website/">Careers</Link>
						<Link to="/Fully-Responsive-Website/">Investors</Link>
						<Link to="/Fully-Responsive-Website/">Term of Services</Link>
					</div>
				</div>
			</div>
			<section className={bindClass(["social-media"])}>
				<div className={bindClass(["social-media-wrap"])}>
					<div className={bindClass(["footer-logo"])}>
						<Link to="/Fully-Responsive-Website/" className={bindClass(["social-logo"])}>
							TRVL <i className="fab fa-typo3"></i>
						</Link>
					</div>
					<small className={bindClass(["website-rights"])}>TRVL © 2020</small>
					<div className={bindClass(["social-icons"])}>
						<Link 
							className={bindClass(["social-icon-link", "facebook"])}
							to="/Fully-Responsive-Website/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link 
							className={bindClass(["social-icon-link", "instagram"])}
							to="/Fully-Responsive-Website/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram"></i>
						</Link>
						<Link 
							className={bindClass(["social-icon-link", "youtube"])}
							to="/Fully-Responsive-Website/"
							target="_blank"
							aria-label="Youtube"
						>
							<i className="fab fa-youtube"></i>
						</Link>
						<Link 
							className={bindClass(["social-icon-link", "twitter"])}
							to="/Fully-Responsive-Website/"
							target="_blank"
							aria-label="Twitter"
						>
							<i className="fab fa-twitter"></i>
						</Link>
						<Link 
							className={bindClass(["social-icon-link", "linkedin"])}
							to="/Fully-Responsive-Website/"
							target="_blank"
							aria-label="Linkedin"
						>
							<i className="fab fa-linkedin"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>	
	);
}

export default Footer;