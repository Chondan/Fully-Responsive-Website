# Fully Responsive Website

Go to website: https://chondan.github.io/Fully-Responsive-Website

## create-react-app
- documents: https://create-react-app.dev/docs/

## Environment varialbes
- Referencing Environment Variables in the HTML
	- You can also access the environment variables starting with `REACT_APP_[variable name]` in the public/index.html. For example
	- `<title>%REACT_APP_WEBSITE_NAME%</title>`
- Adding Temporarty Evironment Variables In Your Shell
	- different command depend on OS
	- e.g. In Linux, macOS -> `REACT_APP_[variable name]=[variable value] npm start`
- Adding Development Environment Variables In .env
	- create a file called `.env` in the root of project
	- **Note: You must create custom environment variables beginning with REACT_APP_[variable name]**
	- Any other variables except NODE_ENV will be ignored to avoid *ccidentally exposing a private key on the machine that could have the same name.*
- **Note: You need to restart the development server after changing .env files**

## react-router-dom

## font awesome
documents: https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use

## Classenames
- A simple JavaScript utility for conditionaly joining classNames together. 
### Trick 
- create reusable function that easier to use
```JavaScript
import cx from 'classnames';
function bindClass(classNameArray) {
	const arr = classNameArray.map(className => styles[className]);
	return cx(...arr);
}
```

`npm install classnames --save`

## Button Component Trick
```JavaScript
const STYLES = ["btn--primary", "btn--outline"];
const buttonStyle = "";
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; // go to default value ("btn--primary")
```

## Videos
- `<video src="/videos/video-2.mp4" />` (start form public folder (public folder == root url))

## CSS
- video { object-fit: cover }
- background 
	- background-position: center center/cover (x-axis y-axis)
- boxshadow: 
	- inset (Changes the shadow from an outer shadow (outset) to an inner shadow)
	- blur -> The higher the number, the more blurred the shadow will be
	- spread -> A positive value increase the size of the shadow, a negative value decreases the size of the shadow
- z-index (must use with display: position, fixed, etc.) `not relative`
- display: flex, flex: 1
	- flex: 1 (Let all the flexible items be the same length, regardless of its content)
- `flex-flow: flex-direction flex-wrap|initial|inherit`
- drop-shadow() -> CSS function applies a drop shadow effect to the input image. Its result is a `<filter-function>`
```css
.cards-item-pic-wrap::after {
	content: attr(data-category);
}
```
- `	max-width: calc((100%) - 60px);`
- `top: 0; left: 0; right: 0; bottom: 0;`
- min-width and max-width
- pseudo-element -> `.footer-input::placeholder`
- justify-self -> property sets the way a box is justified inside its alignment container along the appropriate axis

## Awesome fonts
- social media icons 
	- facebook -> `<i className="fab fa-facebook-f"></i>`