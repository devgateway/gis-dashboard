'use strict';

var routes = require('./routes.jsx');
var Router = require('react-router');

var router = Router.create({
  routes: routes,
  //location: Router.HistoryLocation  // <- uncomment to enable pushstate (no hash in url)
});

module.exports = router;
