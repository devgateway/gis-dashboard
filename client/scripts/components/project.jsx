'use strict';

var React = require('react');
var State = require('react-router').State;


module.exports = React.createClass({
  mixins: [State],
  render: function() {
    return (
      <div>
        <h3>Project {this.getParams().projectId}</h3>
      </div>
    );
  }
});
