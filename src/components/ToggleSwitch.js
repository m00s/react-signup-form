'use strict';

var React = require('react/addons');
var Icon = require('components/utils/Icon');

require('styles/form-ToggleSwitch.sass');

var ToggleSwitch = React.createClass({
  getInitialState: function() {
    return {};
  },
  onChange: function(e) {
    if(this.props.onChange){
      this.props.onChange(e.target.checked);
    }
  },
  render: function () {
    return (
        <div className="privacy-policy">
          <label className="privacy-text">
            I agree to the <span className="underline">Privacy Policy</span>
            <Icon type="asterisk"/>
          </label>
          <div className="toggle-switch-container">
            <label className="switch switch-green">
              <input type="checkbox" className="switch-input" onChange={this.onChange} defaultChecked />
              <span className="switch-label" data-on="Yes" data-off="No"></span>
              <span className="switch-handle"></span>
            </label>
          </div>
        </div>
      );
  }
});

module.exports = ToggleSwitch;
