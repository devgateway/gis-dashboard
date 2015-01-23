'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Header = require('./header.jsx');
var Main = require('./main.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="asdb-ii-app">
        <Header/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }
});
