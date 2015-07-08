'use strict';

var React = require('react/addons');

var Signup = React.createClass({
  render: function () {
    var enabled = this.props.enabled;
    return (
      <div className="input-container">
        <div className="signup-input" disabled={!enabled}>
          <button
            className="form-signup"
            disabled={!enabled}>Signup</button>
        </div>
      </div>
      );
  }
});

module.exports = Signup;
