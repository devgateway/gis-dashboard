
/*http://facebook.github.io/react/docs/component-specs.html*/
var React = require('react');
var Router = require('react-router');
var MapStore = require('../stores/mapStore.js');
var Reflux = require('reflux');
var Link = Router.Link;
var MapActions = require('../actions/mapActions.js')


module.exports  = React.createClass({

    handleClick: function() {
        MapActions.zoomChange(this.props.step);
    },

    render: function() {
        return (
            <button className='btn btn-sm btn-info' onClick={this.handleClick}>{this.props.children}</button>
    		);

    }
});
