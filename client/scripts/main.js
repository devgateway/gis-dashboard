'use strict';

var React = require('react');
var Router = require('react-router');

var router = require('./router.jsx');


router.run(function(Handler, state) {
  React.render(React.createElement(Handler, state), document.getElementById('app-wrapper'));
});
