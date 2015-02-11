'use strict';

var assign = require('object-assign');
var Reflux = require('reflux');

var FilterActions = require('../actions/filterActions.js');


module.exports=Reflux.createStore({

    // Initial setup
    init: function() {
      debugger;
      this.listenTo(FilterActions.loadCountries, this.loadCountries);
      this.listenTo(FilterActions.loadCountries.completed, this.countriesOncompleted);
       this.state = {countryList:[]};
    },


    

    loadCountries: function() {
        debugger;
        assign(this.state, {countryList: ['Argentina','Chiile']});
        FilterActions.loadCountries.completed;
    },

    countriesOncompleted:function(){
        debugger;
      this.output();  
    },

    // Callback
    output: function() {
  // Pass on to listening components
        this.trigger(this.serialize());
    },

    serialize: function() {

        return  this.state
    },

    getInitialState: function() {
       return this.serialize();
    }

});
