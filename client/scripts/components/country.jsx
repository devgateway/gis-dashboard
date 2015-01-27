'use strict';

var React = require('react');
var Link = require('react-router').Link;
var Reflux = require('reflux');
var countryStore = require('../stores/country');
var countryActions = require('../actions/country');


module.exports = React.createClass({
  mixins: [Reflux.listenTo(countryStore, 'onUpdateCountries')],

  componentWillMount: function () {
    countryActions.country(this.props.params.countryId);
  },

  componentWillReceiveProps: function(nextProps) {
    countryActions.country(nextProps.params.countryId);
  },

  getInitialState: function() {
    return this.findThisCountry(countryStore.getInitialState());
  },

  findThisCountry: function(fromStore) {
    var thisCountry = null;
    fromStore.countries.forEach(function(country) {
      if (''+country.id === this.props.params.countryId) {
        thisCountry = country;
      }
    }, this);
    return thisCountry;
  },

  onUpdateCountries: function(newCountryList) {
    this.setState(this.findThisCountry(newCountryList));
  },

  render: function() {
    if (this.state === null) {
      return <div>Loading...</div>
    }

    var projectLinks = this.state.projects.map(function(project) {
      return (
        <li key={project.id}>
          <Link to="project" params={{projectId: project.id}}
            query={{fromCountry: this.props.params.countryId}}>{project.name}</Link>
        </li>
      );
    }, this);

    if (!this.state.loaded) {
      projectLinks = <li><em>Loading...</em></li>
    }

    return (
      <div>
        <h3>Country view for {this.state.name}</h3>
        <Link to="main" className="btn btn-link">« Back to international view</Link>
        <h4>Projects in this country:</h4>
        <ul>
          {projectLinks}
        </ul>
      </div>
    );
  }
});
