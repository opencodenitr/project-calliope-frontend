import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Homepage } from "./pages";
import { Navbar, Footer } from "./shared";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
