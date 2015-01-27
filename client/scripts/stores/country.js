'use strict';

var Reflux = require('reflux');
var countryActions = require('../actions/country');


var _countries = null;
var _isLoading = false;


function _convertRawCountry(rawCountry) {
  // this function could be moved to ../utils/countryUtils
  return rawCountry;  // pass-through for now, we should do validation here
}


var countryStore = Reflux.createStore({

  listenables: countryActions,

  onCountryList: function() {
    _countries = [];
    this.update();
  },

  onCountryListCompleted: function(data) {
    _isLoading = false;
    _countries = _convertRawCountry(data);
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
