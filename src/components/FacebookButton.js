'use strict';

var React = require('react/addons');


require('styles/FacebookButton.sass');

var FacebookButton = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },

  render: function () {
    return (
      <div className="input-container">
        <div className="fb-container">
        <button className="fb-button">
        <span className="fb-logo">f </span>
        Signup with Facebook
        </button>
        </div>
      </div>
      );
  }
});

module.exports = FacebookButton;
