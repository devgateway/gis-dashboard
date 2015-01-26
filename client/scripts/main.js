'use strict';

var React = require('react');
var Router = require('react-router');

// var routes = require('./routes.jsx');
var router = require('./router');


router.run(function(Handler, state) {
  React.render(React.createElement(Handler), document.body);
});
