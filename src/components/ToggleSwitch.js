'use strict';

var React = require('react/addons');

require('styles/ToggleSwitch.sass');

var ToggleSwitch = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },

  render: function () {
    return (
        <div className="privacy-policy">
          <label className="privacy-text">
            I agree to the <span className="underline">Privacy Policy</span>
          </label>
          <div className="toggle-switch-container">
          <label className="switch switch-green">
            <input type="checkbox" className="switch-input" defaultChecked />
            <span className="switch-label" data-on="Yes" data-off="No"></span>
            <span className="switch-handle"></span>
          </label>
          </div>
        </div>
      );
  }
});

module.exports = ToggleSwitch;
