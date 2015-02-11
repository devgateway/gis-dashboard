'use strict';
var FilterActions = require('../actions/FilterActions');

module.exports = {

  	getAllDepartaments: function() {
    // simulate retrieving data from a database
    $.ajax('http://test.monitor.net.co/GisService.svc/Filters/getDepartmentsList/Json', {}).done(function(data) {
            FilterActions.loadAllDepartaments(JSON.parse(data.GetDepartmentsListJsonResult));
        }.bind(this));
  	},

	getAllMunicipalities: function() {
    // simulate retrieving data from a database
    $.ajax('http://test.monitor.net.co/GisService.svc/Filters/getMunicipalitiesList/Json', {}).done(function(data) {
            FilterActions.loadAllMunicipalities(JSON.parse(data.GetMunicipalitiesListJsonResult));
        }.bind(this));
  	}
};