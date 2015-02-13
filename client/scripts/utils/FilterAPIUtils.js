'use strict';
var FilterActions = require('../actions/FilterActions');

module.exports = {

  	getAllDepartamentsFromServer: function() {
    // simulate retrieving data from a database
    $.ajax('http://test.monitor.net.co/GisService.svc/Filters/getDepartmentsList/Json', {}).done(function(data) {
            FilterActions.loadFilterListFromServer(JSON.parse(data.GetDepartmentsListJsonResult), 'departaments');
        }.bind(this));
  	},

	getAllMunicipalitiesFromServer: function() {
    // simulate retrieving data from a database
    $.ajax('http://test.monitor.net.co/GisService.svc/Filters/getMunicipalitiesList/Json', {}).done(function(data) {
            FilterActions.loadFilterListFromServer(JSON.parse(data.GetMunicipalitiesListJsonResult), 'municipalities');
        }.bind(this));
  	},

	getAllDevelopmentObjectiveFromServer: function() {
    // simulate retrieving data from a database
    $.ajax('http://test.monitor.net.co/GisService.svc/Filters/getDOList/Json', {}).done(function(data) {
            FilterActions.loadFilterListFromServer(JSON.parse(data.GetDOListResult), 'developmentObjectives');
        }.bind(this));
  	}
};