'use strict';

var React = require('react');
var Route = require('react-router').Route;

var App = require('./components/app.jsx');


module.exports = (
  <Route name="app" path="/" handler={App}>
  </Route>
);

