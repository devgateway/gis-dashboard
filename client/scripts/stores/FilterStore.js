'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _departaments = [];
var _municipalities = [];
var _departamentSelected = -1;

var FilterStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  getAll: function(filterType) {
    var ret;
    switch(filterType) {
      case 'departaments':
        ret = _departaments;
        break;
      case 'municipalities':
        ret = _municipalities;
        break;
      default:
        // do nothing
    }
    return ret;
  },

  getItem: function(filterType, id) {
    var ret;
    switch(filterType) {
      case 'departaments':
        ret = _departaments.filter(function (data) {
            return (data.id === id);
          });
        break;
      case 'municipalities':
        ret = _municipalities.filter(function (data) {
            return (data.id === id);
          });
        break;
      default:
        // do nothing
    }
    return ret;
  },

  getAllSelected: function(filterType) {
    var ret;
    switch(filterType) {
      case 'departaments':
        ret = _departaments.filter(function (data) {
            return (data.selected);
          });
        break;
      case 'municipalities':
        ret = _municipalities.filter(function (data) {
            return (data.selected);
          });
        break;
      default:
        // do nothing
    }
    return ret;
  }

});


FilterStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case 'RECEIVE_ALL_DEPARTAMENTS':
      _departaments = action.departaments;
      FilterStore.emitChange();
      break;

    case 'RECEIVE_ALL_MUNICIPALITIES':
      _municipalities = action.municipalities;
      FilterStore.emitChange();
      break;

    case 'CHANGE_FILTER_ITEM_SELECTION':
      switch(action.filterType) {
        case 'departaments':
          _departaments.map(function(item) {
              if (item.id == action.id) {
                item.selected = action.value;
                FilterStore.emitChange();
              } 
          });
          break;
        case 'municipalities':
          _municipalities.map(function(item) {
              if (item.idMunicipalitie == action.id) {
                item.selected = action.value;
                FilterStore.emitChange();
              } 
            });
          break;
        default:
        // do nothing
      }
      break;

    default:
      // do nothing
  }

});

module.exports = FilterStore;
