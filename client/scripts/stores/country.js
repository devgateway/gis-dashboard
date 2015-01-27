'use strict';

var Dispatcher = require('../dispatchers/default');
var Constants = require('../constants/app');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';


var _currentId = null;
var _countries = {};


function _convertRawCountry(rawCountry) {
  // this funciton could be moved to ../utils/countryUtils
  return rawCountry;  // pass-through for now, we should do validation here
}


function _addCountries(rawCountries) {
  rawCountries.forEach(function(country) {
    if (!_countries[country.id]) {
      _countries[country.id] = _convertRawCountry(country);
    }
  });
}


var CountryStore = assign({}, EventEmitter.prototype, {

  // eventemitter boilerplate (move to mixin?)
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },

  // real stuff
  get: function(id) {
    return _countries[id];
  },

  getAll: function() {
    return _countries;
  }

});


CountryStore.dispatchToken = Dispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {
    case ActionTypes.CLICK_COUNTRY:
      CountryStore.emitChange();
      break;

    case ActionTypes.LOAD_COUNTRIES_SUCCESS:
      _addCountries(action.data);
      CountryStore.emitChange();
      break;

    default:
      // do nothing
  }
});


module.exports = CountryStore;
