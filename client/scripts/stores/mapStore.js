'use strict';

var assign = require('object-assign');
var Reflux = require('reflux');
var MapActions = require('../actions/mapActions');


module.exports=Reflux.createStore({

    // Initial setup
    init: function() {
       this.state = {zoomLevel:1};
       this.listenTo(MapActions.zoomChange, this.onZoomChange);
    },


    onAddLayer:function(layerURL){
        // Pass on to listeners
        // update state, then
        this.output();
    },


    onZoomChange: function(changeBy) {
    debugger;
        console.log(changeBy);
        assign(this.state, {zoomLevel: this.state.zoomLevel + changeBy});
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
