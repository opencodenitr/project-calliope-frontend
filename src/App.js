import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, TeamPage, EditorsPage, LoginPage, AdminPage } from './pages';
import { Navbar, Footer } from './shared';
import Auth from './utils/auth';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/team' component={TeamPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/admin' component={AdminPage} />
          <Route exact path='/Editors' component={EditorsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
