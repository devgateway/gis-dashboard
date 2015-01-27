'use strict';

var React = require('react');


module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <h3>Project {this.props.projectId}</h3>
      </div>
    );
  }
});
