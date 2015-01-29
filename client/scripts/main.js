'use strict';
var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var RoutesConfig=require('./routeConfig.jsx');


var router = Router.create({
  routes: RoutesConfig,
 // location: Router.HistoryLocation  // <- uncomment to enable pushstate (no hash in url)
});


router.run(function(Handler, state) {
  React.render(React.createElement(Handler, state), document.getElementById('app-wrapper'));
});