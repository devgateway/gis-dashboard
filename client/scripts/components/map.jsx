
/*http://facebook.github.io/react/docs/component-specs.html*/
var React = require('react');
var Router = require('react-router');
var MapStore = require('../stores/mapStore.js');
var Reflux = require('reflux');
var Link = Router.Link;
var MapControls = require('../components/mapControls.jsx')

module.exports  = React.createClass({
    //statics 
  	mixins: [Reflux.connect(MapStore,"mapSatus")],

    componentDidMount: function() {
    	console.log('----------- componentDidMount -------------');
    	this.getDOMNode().querySelector('.map').appendChild(this.map.getContainer());
    	this.map.fitWorld();
    	

    },


	componentWillMount :function(){
		   	var map = this.map = L.map(document.createElement('div'), {
    		layers: [
    		L.tileLayer(
    			'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    			{attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
    		]
    	});
    	
 
	},

    componentWillUnmount: function() {
   		console.log('----------- componentWillUnmount -------------');
    	this.map.off('click', this.onMapClick);
    	this.map = null;
    },

    onMapClick: function() {
        // Do some wonderful map things...
    },


    setZoom:function(){
    	this.map.setZoom(this.state.mapSatus.zoomLevel);
    	
    },

   	componentDidUpdate:function( prevProps,  prevState){
		console.log('componentDidUpdate');
		this.setZoom();
	},

    render: function() {
    	console.log('----------- render -------------');
    	return (
    		<div>
	    		<div className='map'></div>
    			<span><MapControls step={-1}><p>-</p></MapControls></span> -  <span><MapControls step={1}><p>+</p></MapControls></span>
    		</div>
    		);
    }
});
