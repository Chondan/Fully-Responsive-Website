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
					<Route path="/" exact component={Home}/>
					<Route path="/products" exact component={Products} />
					<Route path="/products/imgs/:imgId" render={({ match }) => <Products match={match} />} />
					<Route path="/services" component={Services} />
					<Route path="/sign-up" component={SignUp} />
 				</Switch>
			</Router>
		</>
	);
}

export default App;