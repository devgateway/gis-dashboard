'use strict';

var React = require('react');
var Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;


var Root = require('./components/root.jsx');
var Country = require('./components/country.jsx');
var Project = require('./components/project.jsx');
var International = require('./components/international.jsx');


var routes = (
  <Route name="main" path="/" handler={Root}>
    <Route name="country" path="country/:countryId" handler={Country} />
    <Route name="project" path="project/:projectId" handler={Project} />
    <DefaultRoute handler={International} />
  </Route>
);


var router = Router.create({
  routes: routes,
  //location: Router.HistoryLocation  // <- uncomment to enable pushstate (no hash in url)
});

module.exports = router;
