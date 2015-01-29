'use strict';

var React = require('react');
var Reflux = require('reflux');
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;

module.exports  = React.createClass({

  render: function() {
    return (
      <RouteHandler {...this.props}/>
    );
  }

});
