import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Homepage } from './pages';
import MainTeam from "./pages/TeamPage"
import { Navbar, Footer } from './shared';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/team' component={MainTeam} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
