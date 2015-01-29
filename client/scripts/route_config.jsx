'use strict';
var React = require('react');
var Route = require('react-router').Route; //needed for jsx when translating the jsx code
var DefaultRoute = require('react-router').DefaultRoute; //needed for jsx when translating the jsx code


/*Component references, will be used for routes*/
var RootComponent=require('./components/root.jsx')
var MapComponent=require('./components/map.jsx')
var AboutComponent=require('./components/about.jsx')

var AnnotatedComponent=require('./components/annotatedComponent.jsx')



module.exports = (
  <Route name="main" path="/" handler={RootComponent}>
    <Route name="map" path="map" handler={MapComponent} />
    <Route name="about" path="about" handler={AboutComponent} />
    

    <DefaultRoute handler={AnnotatedComponent} />
  </Route>
);