'use strict';

var AppDispatcher = require('../dispatchers/default');
var ActionTypes = require('../constants/app').ActionTypes;
var CountryStore = require('../stores/country');


module.exports = {

  // server actions
  handleLoadSuccess: function(data) {
    // fake a delay
    window.setTimeout(function() {
      AppDispatcher.handleServerAction({
        type: ActionTypes.LOAD_COUNTRIES_SUCCESS,
        data: data
      });
    }, 500);
  },

  handleLoadFailure: function(err, msg) {
    console.error(err);
    AppDispatcher.handleServerAction({
      type: ActionTypes.LOAD_COUNTRIES_FAIL,
      error: err,
      message: msg
    });
  },

  loadCountries: function(rawCountryData) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_COUNTRIES
    });
  },

  // view actions
  clickCountry: function(countryId) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLICK_COUNTRY,
      countryId: countryId
    });
  }

};
