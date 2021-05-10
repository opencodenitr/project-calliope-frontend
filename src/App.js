import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from './pages';
import MainTeam from "./pages/TeamPage";
import Editors from "./pages/EditorsPage"
import Sundary from "./pages/Sundary"
import { Navbar, Footer } from './shared';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/team' component={MainTeam} />
          <Route exact path='/Editors' component={Editors} />
          <Route exact path='/sundary' component={Sundary} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
