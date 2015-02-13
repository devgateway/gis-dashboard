'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var filters = {};

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
    if (filters[filterType]) {
      return filters[filterType];
    } else {
      return [];
    }    
  },

  getItem: function(filterType, id) {
    if (filters[filterType]) {
      return filters[filterType].filter(function (data) {
            return (data.id === id);
          });
    } else {
      return [];
    }
  },

  getAllSelected: function(filterType) {
    if (filters[filterType]) {
      return filters[filterType].filter(function (data) {
            return (data.selected);
          });
    } else {
      return [];
    }
  }
});


FilterStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case 'RECEIVE_FILTER_LIST_FROM_SERVER':
      filters[action.filterType] = action.filterList;
      FilterStore.emitChange();
      break;

    case 'CHANGE_FILTER_ITEM_SELECTION':
      filters[action.filterType].map(function(item) {
        if (item.id == action.id) {
          item.selected = action.value;
          FilterStore.emitChange();
        } 
      });
      
      break;

    default:
      // do nothing
  }

});

module.exports = FilterStore;
