import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import PoliticaDeCookies from './PoliticaDeCookies';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/PoliticaDeCookies" component={PoliticaDeCookies} />
      </Switch>
    </Router>
  );
};

export default MainRouter;