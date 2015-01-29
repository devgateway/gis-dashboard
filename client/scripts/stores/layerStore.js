'use strict';
var Reflux =require('reflux')

module.exports=Reflux.createStore({

    // Initial setup
    init: function() {
        // Register statusUpdate action
        this.listenTo(statusUpdate, this.output);
    },

    // Callback
    output: function(flag) {
        var status = flag ? 'ONLINE' : 'OFFLINE';

        // Pass on to listeners
        this.trigger(status);
    }

});