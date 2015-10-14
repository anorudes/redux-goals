import React from 'react';
import { Route } from 'react-router';
import { App, Home } from './containers';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home}/>
  </Route>
);
