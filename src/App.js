import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;