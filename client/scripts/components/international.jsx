'use strict';

var React = require('react');
var Link = require('react-router').Link;
var CountryStore = require('../stores/country');


var International = React.createClass({

  updateState: function() {
    this.setState(CountryStore.getAll());
  },

  getInitialState: function() {
    return {
      countries: CountryStore.getAll()
    };
  },

  componentDidMount: function() {
    CountryStore.on('change', this.updateState);
  },

  componentWillUnmount: function () {
    // CountryStore.removeListener(this.updateState);
  },

  render: function() {
    var countryList;
    if (CountryStore.isLoading()) {
      countryList = <li>Loading countries...</li>;
    } else {
      var country;
      countryList = Object.keys(this.state.countries).map(function(id) {
        country = this.state.countries[id];
        return (
          <li key={id}>
            <Link to="country" params={{countryId: id}}>{country.name}</Link>
          </li>
        );
      }, this);

      if (countryList.length === 0) {
        countryList = <li>No Countries Found</li>;
      }
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
