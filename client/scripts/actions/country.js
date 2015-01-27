'use strict';

var Reflux = require('reflux');
var api = require('../api');


var countryList = Reflux.createAction({ asyncResult: true });
countryList.listenAndPromise(api.getAllCountries);

var country = Reflux.createAction({ asyncResult: true });
country.listenAndPromise(api.getCountry);


module.exports = {
  countryList: countryList,
  country: country
};
