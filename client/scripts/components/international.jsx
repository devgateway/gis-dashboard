'use strict';

var React = require('react');
var Link = require('react-router').Link;

var International = React.createClass({
  render: function() {
    var countries = ['inda', 'china'].map(function(id) {
      return (
        <li key={id}>
          <Link to="country" params={{countryId: id}}>{id}</Link>
        </li>
      );
    });
    return (
      <div>
        <h3>International view</h3>
        <ul>
          {countries}
        </ul>
      </div>
    );
  }
});

module.exports = International;
