'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var HeaderComponent=require('./header.jsx')
var TestComponent = require('./test.jsx')


module.exports = React.createClass({
 
  render: function() {
    return (
     <div className="main">
            <HeaderComponent/>
            <div className='row'>
	            <div className='col-lg-4 col-md-2'>
					<TestComponent > </TestComponent>
	            </div>
            <div className='col-lg-8'>
				  <RouteHandler {...this.props}/>
            </div>
		</div>

      </div>
    );
  }
});
