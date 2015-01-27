'use strict';

var request = require('reqwest');

module.exports = {

  getAllCountries: function() {
    return request({ url: 'mock-json/countries.json' });
  },

  getCountry: function(countryId) {
    return request({ url: 'mock-json/countries/' + countryId + '.json' });
  }

};
