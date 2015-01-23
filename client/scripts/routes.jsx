'use strict';

var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;

var App = require('./components/app.jsx');
var Country = require('./components/country.jsx');
var Project = require('./components/project.jsx');
var International = require('./components/international.jsx');


module.exports = (
  <Route name="main" path="/" handler={App}>
    <Route name="country" path="country/:countryId" handler={Country} />
    <Route name="project" path="project/:projectId" handler={Project} />
    <DefaultRoute handler={International} />
  </Route>
);

