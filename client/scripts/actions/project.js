'use strict';

var Reflux = require('reflux');
var api = require('../api');

var project = Reflux.createAction({ asyncResult: true });
project.listenAndPromise(api.getProject);


module.exports = {
  project: project
};
