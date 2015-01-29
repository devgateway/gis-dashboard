var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
    <ul className="nav nav-pills">
  		
  		<li role="presentation" className="active">
  			<Link to="map">Map</Link>
  		</li>

  		<li role="presentation">
				<Link to="about">About</Link>
  		</li>
  		
	</ul>
    );
  }
});
