	
/*http://facebook.github.io/react/docs/component-specs.html*/
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Link = Router.Link;

var FilterActions = require('../actions/filterActions.js');

var TestStore=require('../stores/test.js')

module.exports  = React.createClass({

	displayName :"",
	mixins: [Reflux.listenTo(TestStore,"countries")],

	
	componentDidMount: function() {
	console.log('componentDidMount');
	},

	componentWillMount :function(){
		FilterActions.loadCountries();
	},

	componentWillUnmount: function() {

	},

	componentDidUpdate:function( prevProps,  prevState){
		
	},



    getInitialState: function() {
       return {countries:[]};
    },

	render: function() {
		debugger;
		var countries=this.state.countries;
		return(
			<div>
			{
				countries.map(function(item){ return (<span>{item.name}</span>) })
				}
        	</div>
			);
	}

}   
);
