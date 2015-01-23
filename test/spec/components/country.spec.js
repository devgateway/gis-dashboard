/*jshint newcap:false */
/* jshint -W024 */
/* jshint expr:true */

'use strict';

var React = require('react');
var Country = React.createFactory(require('../../../client/scripts/components/country.jsx'));

var ReactTestUtils;
var reactRender;

beforeEach(function() {
  ReactTestUtils = require('react/addons').addons.TestUtils;
  reactRender = ReactTestUtils.renderIntoDocument;
});

describe('Testing React Component: Country', function() {
  it('Should run a few assertions', function() {

  });
});
