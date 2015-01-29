'use strict';
var Reflux = require('reflux');

module.exports = Reflux.createActions(
{
    "loadCountries": {children: ["completed","failed"]}
}); 
