import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, TeamPage, EditorsPage } from './pages';
import { Navbar, Footer } from './shared';
import Auth from './utils/auth';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Auth(Homepage, null)} />
          <Route exact path='/team' component={Auth(TeamPage, null)} />
          <Route exact path='/Editors' component={Auth(EditorsPage, null)} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
