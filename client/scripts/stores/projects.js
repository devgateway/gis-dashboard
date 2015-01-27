'use strict';

var Reflux = require('reflux');
var projectActions = require('../actions/project');


var _projects = [];
var _isLoading = false;


function _convertRawProject(rawProject, loaded) {
  // maybe this function could be moved to ../utils/countryUtils or something
  return {
    id: rawProject.id,
    name: rawProject.name,
    description: rawProject.description
  };
}


var projectStore = Reflux.createStore({
  listenables: projectActions,

  onProject: function(projectId) { _isLoading = true; },

  onProjectFailed: function(err, message) { _isLoading = false; },

  onProjectCompleted: function(data) {
    _projects[data.id] = _convertRawProject(data, true);
    _isLoading = false;
    this.update();
  },

  isLoading: function() {
    return _isLoading;
  },

  update: function() { this.trigger(this.getState()); },

  getState: function() { return {countries: _projects}; },

  getInitialState: function() { return this.getState(); }

});


module.exports = projectStore;
