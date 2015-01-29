'use strict';

var React = require('react');
var Reflux = require('reflux');
var Link = require('react-router').Link;

module.exports  = React.createClass({

  propTypes: {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    totalCommitments: React.PropTypes.number,
  },

  render: function() {
    return (
      <div className='country-summary'>
        <h3>
          <Link to='country' params={{countryId: this.props.id}}>
            {this.props.name}
          </Link>
        </h3>
        <p>Total Commitments: <strong>{this.props.totalCommitments}</strong></p>
        <p>
          <Link to='country' params={{countryId: this.props.id}}>View country page</Link>
        </p>
      </div>
    );
  }

});
