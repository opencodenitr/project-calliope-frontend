import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Homepage, TeamPage } from "./pages";
import { Navbar, Footer } from "./shared";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Router>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/team' component={TeamPage} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
