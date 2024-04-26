// AppNavigation.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClimaApp from './ClimaApp';
import HomeScreen from './HomeScreen';

function AppNavigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/clima" component={ClimaApp} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppNavigation;
