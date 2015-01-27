'use strict';

var request = require('reqwest');


function logFailure(err, message) {
  console.error(message);
  console.error(err);
}


module.exports = {

  getAllCountries: function() {
    return request({ url: 'mock-json/countries.json' }).fail(logFailure);
  },

  getCountry: function(countryId) {
    return request({ url: 'mock-json/countries/' + countryId + '.json' }).fail(logFailure);
  },

  getProject: function(projectId) {
    return request({ url: 'mock-json/projects/' + projectId + '.json' }).fail(logFailure);
  }

};
