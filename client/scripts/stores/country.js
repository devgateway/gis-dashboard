'use strict';

var Reflux = require('reflux');
var countryActions = require('../actions/country');


var _countries = null;
var _isLoading = false;


function _convertRawCountry(rawCountry, loaded) {
  // this function could be moved to ../utils/countryUtils
  return {
    id: rawCountry.id,
    loaded: loaded || false,
    name: rawCountry.name,
    projects: rawCountry.projects || []
  };
}


var countryStore = Reflux.createStore({

  listenables: countryActions,

  onCountryListCompleted: function(data) {
    _isLoading = false;
    _countries = data.map(_convertRawCountry);
    this.update();
  },

  onCountryCompleted: function(data) {
    _countries[data.id] = _convertRawCountry(data, true);
    this.update();
  },

  isLoading: function() {
    return _isLoading;
  },

  update: function() { this.trigger(this.getState()); },

  getState: function() { return {countries: _countries}; },

  getInitialState: function() {
    if (_countries === null && !_isLoading) {
      countryActions.countryList();
      _countries = [];
      _isLoading = true;
    }
    return this.getState();
  }

});


module.exports = countryStore;
