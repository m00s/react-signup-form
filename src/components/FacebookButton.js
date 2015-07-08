'use strict';

var React = require('react/addons');

require('styles/form-FacebookButton.sass');

var FacebookButton = React.createClass({
  render: function () {
    return (
      <div className="input-container">
        <div id="fb-signing" className="fb-container">
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
