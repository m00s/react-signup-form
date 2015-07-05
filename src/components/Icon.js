var React = require('react/addons');

var Icon = React.createClass({

  render: function() {
    switch(this.props.type) {

      case 'circle_error':
        return (
          <div className="validationIcons">
          <i className="input_error_icon">
          <svg viewBox="0 0 20 20">
          <path d="M10,0.982c4.973,0,9.018,4.046,9.018,9.018S14.973,19.018,10,19.018S0.982,14.973,0.982,10
            S5.027,0.982,10,0.982 M10,0C4.477,0,0,4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,10,0L10,0z M9,5.703
            V5.441h2.5v0.262l-0.66,5.779H9.66L9,5.703z M9.44,12.951h1.621v1.491H9.44V12.951z"/>
          </svg>
          </i>
          </div>
        );

    }
  }
});

module.exports = Icon;
