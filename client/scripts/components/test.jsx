	
/*http://facebook.github.io/react/docs/component-specs.html*/
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Link = Router.Link;

var FilterActions = require('../actions/FilterActions.js');
var FilterAPIUtils = require('../utils/FilterAPIUtils.js');

var TestStore=require('../stores/FilterStore.js')

function getStateFromStores() {
  return {
    departaments: TestStore.getAllDepartaments(),
  };
}


module.exports  = React.createClass({

	displayName :"",	
	
	componentDidMount: function() {
		TestStore.addChangeListener(this._onChange);
	},

	componentWillMount :function(){
		FilterAPIUtils.getAllDepartaments();
	},

	componentWillUnmount: function() {

	},

	componentDidUpdate:function( prevProps,  prevState){
		
	},

    getInitialState: function() {
       return getStateFromStores();
    },

	_onChange: function() {
       this.setState(getStateFromStores());
    },

	render: function() {
		debugger;
		var deps = [];
		if (this.state.departaments.length && this.state.departaments.length > 0){
			deps = this.state.departaments;
		}
		return(
			<div>
				{
					deps.map(function(item){ 
						debugger;
						//return (<span>{item.name}</span>);
						//return React.createElement("span", null, item.name)
						return <span key={item.idDepto}>{item.Department}</span>;
					})
				}
        	</div>
			);
	}

}   
);
