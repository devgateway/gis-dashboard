'use strict';
var Reflux = require('reflux');


var makeRequest = Reflux.createAction({ asyncResult: true });


/*
module.exports = Reflux.createActions(
	[
    "doSomething",
    "loadSomething": {children: ["completed","failed"]} // this creates 'load', 'load.completed' and 'load.failed' For actions that represent asynchronous operations (e.g. API calls), a few separate dataflows result from the operation
	]); 
*/

