/*jshint newcap:false */
/* jshint -W024 */
/* jshint expr:true */

'use strict';

var React = require('react');
var Footer = React.createFactory(require('../../../client/scripts/components/footer.jsx'));

var ReactTestUtils;
var reactRender;

beforeEach(function() {
  ReactTestUtils = require('react/addons').addons.TestUtils;
  reactRender = ReactTestUtils.renderIntoDocument;
});

describe('Testing React Component: Footer', function() {
  it('Should run a few assertions', function() {

  });
});
