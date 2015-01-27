'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;


module.exports = React.createClass({
  render: function() {
    return (
      <div className="asdb-ii-app">
        <header>
          <h1>header</h1>
        </header>

        {/* defer to the child route handler */}
        <RouteHandler {...this.props} /* <- sends props as attributes to child handler */ />

        <footer>
          <h4>footer</h4>
        </footer>
      </div>
    );
  }
});
