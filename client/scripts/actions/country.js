'use strict';

var Reflux = require('reflux');
var api = require('../api');


var countryList = Reflux.createAction({ asyncResult: true });
countryList.listenAndPromise(api.getCountries);


module.exports = {
  countryList: countryList
};
