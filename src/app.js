import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Products, Services, SignUp } from './components/pages';

function App() {
 	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/Fully-Responsive-Website" exact component={Home}/>
					<Route path="/Fully-Responsive-Website/products" exact component={Products} />
					<Route path="/Fully-Responsive-Website/products/imgs/:imgId" render={({ match }) => <Products match={match} />} />
					<Route path="/Fully-Responsive-Website/services" component={Services} />
					<Route path="/Fully-Responsive-Website/sign-up" component={SignUp} />
 				</Switch>
			</Router>
		</>
	);
}

export default App;