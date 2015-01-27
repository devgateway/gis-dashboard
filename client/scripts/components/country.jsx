'use strict';

var React = require('react');
var Link = require('react-router').Link;


module.exports = React.createClass({

  render: function() {
    console.log('p', this.props);
    var thisCountryId = this.props.countryId;
    var projectLinks = [ 1234, 1235, 1236, 1237 ].map(function(id) {
      return (
        <li key={id}>
          <Link to="project" params={{projectId: id}}>Project {id}</Link>
        </li>
      );
    });
    return (
      <div>
        <h3>Country view for {this.props.countryId}</h3>
        <Link to="main" className="btn btn-link">« Back to international view</Link>
        <h4>Projects in this country:</h4>
        <ul>
          {projectLinks}
        </ul>
      </div>
    );
  }
});
