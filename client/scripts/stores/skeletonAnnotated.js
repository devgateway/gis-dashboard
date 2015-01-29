 /*Actions ║──────>║ Stores ║──────>║ View Components*/ 

/*
Stores contain the application state and logic. Their role is somewhat similar to a model in a traditional MVC, 
but they manage the state of many objects — they do not represent a single record of data like ORM models do. 
Nor are they the same as Backbone's collections. 
More than simply managing a collection of ORM-style objects, stores manage the application state for a particular domain within the application.

 */

'use strict';
var Reflux =require('reflux')

//If you would like to have a common set of methods available to all stores do the following:
Reflux.StoreMethods.mySharedMethod = function() { console.log(arguments); };


module.exports=Reflux.createStore({
 	/*Add Mixins*/
 	//mixins: [MyMixin]

    /*Liste all actions and call callbacks based on event name (example if event is called fireBall the callback will be called onFireBall*/
    //listenables:actions


    /* Initial setup*/
    init: function() {
        /*Listen to the following actions*/
         this.listenTo(actions.anAction,this.listenActionOne);
       	 this.listenTo(actions.magicMissile,this.listenActionTwo);
       	  //this.listenToMany(actions); /*Listen to all actions sane as setting listenables properties*/
    },

    // Callback
    listenActionOne: function(flag) {
        var status = flag ? 'ONLINE' : 'OFFLINE';
	   // Pass on to listeners
        this.trigger(status);
    },

// Callback
    listenActionTwo: function(flag) {
        var status = flag ? 'ONLINE' : 'OFFLINE';
       // Pass on to listeners
        this.trigger(status);
    }

});