'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

  	loadFilterListFromServer: function(filterList, filterType) {
	    AppDispatcher.handleServerAction({
	      type: 'RECEIVE_FILTER_LIST_FROM_SERVER',
	      filterType: filterType,
	      filterList: filterList
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