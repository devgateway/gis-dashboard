'use strict';

var React = require('react');
var Reflux = require('reflux');
var Link = require('react-router').Link;
var projectStore = require('../stores/projects');
var projectActions = require('../actions/project');


module.exports = React.createClass({
  mixins: [Reflux.listenTo(projectStore, 'onUpdateProjects')],

  componentWillMount: function () {
    projectActions.project(this.props.params.projectId);
  },

  componentWillReceiveProps: function(nextProps) {
    projectActions.project(nextProps.params.projectId);
  },

  findThisProject: function(storeData) {
    var thisProject = null;
    storeData.countries.forEach(function(project) {
      if (''+project.id === this.props.params.projectId) {
        thisProject = project;
      }
    }, this);
    return thisProject;
  },

  getInitialState: function() {
    return this.findThisProject(projectStore.getInitialState());
  },

  onUpdateProjects: function(newProjectList) {
    this.setState(this.findThisProject(newProjectList))
  },

  render: function() {
    if (this.state === null) {
      return <div>Loading...</div>
    }
    var linkBack = this.props.query.fromCountry
      ? <Link to="country" params={{countryId: this.props.query.fromCountry}}>« back to country</Link>
      : <Link to="main">« back to international</Link>;
    return (
      <div>
        <h3>{this.state.name}</h3>
        {linkBack}
        <p>{this.state.description}</p>
      </div>
    );
  }
});
