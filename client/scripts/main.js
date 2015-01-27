'use strict';

var React = require('react');
var Router = require('react-router');

var router = require('./router.jsx');





// not sure where this should go but....
// var request = require('reqwest');
// var CountryActions = require('./actions/country');
// function loadCountries() {
//   console.log(CountryActions);
//   CountryActions.countryList();
//   request({url: 'mock-json/countries.json'})
//     .then(CountryActions.countryList.completed)
//     .fail(CountryActions.countryList.failed);
// }


// loadCountries();




router.run(function(Handler, state) {
  React.render(React.createElement(Handler, state), document.getElementById('app-wrapper'));
});
