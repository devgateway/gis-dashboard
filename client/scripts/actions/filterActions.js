'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

  	loadAllDepartaments: function(departaments) {
	    AppDispatcher.handleServerAction({
	      type: 'RECEIVE_ALL_DEPARTAMENTS',
	      departaments: departaments
	    });
  	},

  	loadAllMunicipalities: function(municipalities) {
    	AppDispatcher.handleServerAction({
	      type: 'RECEIVE_ALL_MUNICIPALITIES',
	      municipalities: municipalities
	    });
  	},

	changeFilterItemSelection: function(filterType, id, value) {
	    AppDispatcher.handleServerAction({
	      type: 'CHANGE_FILTER_ITEM_SELECTION',
	      filterType: filterType,
	      id: id,
	      value: value
	    });
  	},

};