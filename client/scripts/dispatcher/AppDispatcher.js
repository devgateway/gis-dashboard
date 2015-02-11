'use strict';
var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var AppDispatcher = new Dispatcher();

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  	AppDispatcher.handleServerAction = function(action) {
	  this.dispatch({
	    source: 'SERVER_ACTION',
	    action: action
	  });
	};

  
  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  AppDispatcher.handleServerAction = function(action) {
	  this.dispatch({
	    source: 'VIEW_ACTION',
	    action: action
	  });
	};


module.exports = AppDispatcher;