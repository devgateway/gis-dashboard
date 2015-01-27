'use strict';

var React = require('react');
var Link = require('react-router').Link;
var Reflux = require('reflux');
var countryStore = require('../stores/country');
var countryActions = require('../actions/country');


var International = React.createClass({
  mixins: [Reflux.connect(countryStore)],

  render: function() {
    var country;
    var countryList = Object.keys(this.state.countries).map(function(id) {
      country = this.state.countries[id];
      return (
        <li key={id}>
          <Link to="country" params={{countryId: id}}>{country.name}</Link>
        </li>
      );
    }, this);

    if (countryStore.isLoading()) {
      countryList = <li><em>Loading countries...</em></li>
    }

    return (
      <div>
        <h3>International view</h3>
        <ul>
          {countryList}
        </ul>
      </div>
    );
  }
});

module.exports = International;
