'use strict';
var React = require('react');
var Route = require('react-router').Route; //needed for jsx when translating the jsx code
var DefaultRoute = require('react-router').DefaultRoute; //needed for jsx when translating the jsx code


/*Component references, will be used for routes*/
var RootComponent = require('./components/root.jsx');
var MapComponent = require('./components/map.jsx');
var AboutComponent = require('./components/about.jsx');

var AsDBRootComponent = require('./components/asdb/root.jsx');
var AsDBCountryListComponent = require('./components/asdb/countryList.jsx');
var CountryComponent = require('./components/asdb/country.jsx');


module.exports = ( 
  <Route name="main" path="/" handler={RootComponent}>
    <Route name="map" path="map" handler={MapComponent} />
    <Route name="about" path="about" handler={AboutComponent} />
    <DefaultRoute handler={MapComponent} />

    <Route name="asdb" path="/asdb" handler={AsDBRootComponent}>
      <Route path="countries/" handler={AsDBCountryListComponent} />
      <Route name="country" path="countries/:countryId" handler={CountryComponent} />
    </Route>
  </Route>
);
