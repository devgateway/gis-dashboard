'use strict';

var request = require('reqwest');

module.exports = {
  getCountries: function() {
    return request({ url: 'mock-json/countries.json'});
  }
};
