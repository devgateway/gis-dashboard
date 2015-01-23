'use strict';

var React = require('react');
var Link = require('react-router').Link;
var State = require('react-router').State;


module.exports = React.createClass({
  mixins: [State],
  render: function() {
    var thisCountryId = this.getParams().countryId;
    var projectLinks = [ 1234, 1235, 1236, 1237 ].map(function(id) {
      return (
        <li>
          <Link to="project" params={{projectId: id}}>Project {id}</Link>
        </li>
      );
    });
    return (
      <div>
        <h3>Country view for {this.getParams().countryId}</h3>
        <Link to="main" className="btn btn-link">« Back to international view</Link>
        <h4>Projects in this country:</h4>
        <ul>
          {projectLinks}
        </ul>
      </div>
    );
  }
});
