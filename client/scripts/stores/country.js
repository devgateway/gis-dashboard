'use strict';

var Reflux = require('reflux');
var countryActions = require('../actions/country');


var _countries = [];
var _isLoading = false;


function _convertRawCountry(rawCountry, loaded) {
  // maybe this function could be moved to ../utils/countryUtils or something
  return {
    id: rawCountry.id,
    loaded: loaded || false,
    name: rawCountry.name,
    projects: rawCountry.projects || []
  };
}


var countryStore = Reflux.createStore({

  listenables: countryActions,

  onCountryList: function() { _isLoading = true; },

  onCountryListFailed: function() { _isLoading = false; },

  onCountryListCompleted: function(data) {
    _countries = data.map(_convertRawCountry);
    _isLoading = false;
    this.update();
  },

  onCountry: function() { _isLoading = true; },

  onCountryFailed: function() { _isLoading = false; },

  onCountryCompleted: function(data) {
    _countries[data.id] = _convertRawCountry(data, true);
    _isLoading = false;
    this.update();
  },

  isLoading: function() {
    return _isLoading;
  },

  update: function() { this.trigger(this.getState()); },

  getState: function() { return {countries: _countries}; },

  getInitialState: function() {
    if (_countries.length === 0 && !_isLoading) {
      countryActions.countryList();
    }
    return this.getState();
  }

});


module.exports = countryStore;
