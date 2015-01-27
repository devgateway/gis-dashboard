'use strict';

var React = require('react');
var Router = require('react-router');

var router = require('./router');





// not sure where this should go but....
var request = require('reqwest');
var CountryActions = require('./actions/country');
function loadCountries() {
  CountryActions.loadCountries();
  request({url: 'mock-json/countries.json'})
    .then(CountryActions.handleLoadSuccess)
    .fail(CountryActions.handleLoadFailure);
}


loadCountries();




router.run(function(Handler, state) {
  React.render(React.createElement(Handler, state), document.body);
});
