'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var HeaderComponent=require('./header.jsx')

module.exports = React.createClass({
  render: function() {
    return (

      <div className="main">
            
            <HeaderComponent/>
            {/* defer to the child route handler */}
        
            <RouteHandler {...this.props} /* <- sends props as attributes to child handler */ />

      </div>
    );
  }
});
