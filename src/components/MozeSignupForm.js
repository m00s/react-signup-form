'use strict';

var React = require('react/addons');
var MozeButton = require('components/MozeButton');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.sass');

var MozeSignupForm = React.createClass({
  render: function() {
    return (
      <div className="moze-signup-form">
        <ReactTransitionGroup transitionName="fade">
          <MozeButton></MozeButton>
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<MozeSignupForm />, document.getElementById('content')); // jshint ignore:line

module.exports = MozeSignupForm;
