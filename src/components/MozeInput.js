'use strict';

var React = require('react/addons');
var Icon = require('components/utils/Icon');
var _ = require('lodash');

require('../styles/form-MozeInput.sass');

var MozeInput = React.createClass({
  getInitialState: function(){
    return {
      validationStarted: false,
      isFocused: false
    };
  },

  prepareToValidate: function(){},
  componentWillMount: function(){
    var startValidation = function(){
      this.setState({
        validationStarted: true
      });
    }.bind(this);

    if (this.props.value) {
      startValidation();
    }
    else {
      this.prepareToValidate = _.debounce(startValidation, 1000);
    }
  },

  handleChange: function(e){
    if (!this.state.validationStarted) {
      this.prepareToValidate();
    }
    if(this.props.onChange){
      this.props.onChange(e);
    }
  },

  onFocusHandler: function(){
    this.setState({
      isFocused: true
    });
  },

  onBlurHandler: function(){
    this.setState({
      isFocused: false
    });
  },

  render: function(){
    var containerClass = this.props.containerClass || 'input-container';
    var inputClass = this.props.className || 'moze-input';
    var placeholder = this.props.placeholder;
    var value = this.props.value;
    var label = this.props.label ? <label className="input-label">{this.props.label}</label> : '';
    var req = this.props.required ? <Icon type="asterisk"/> : '';
    var valid = this.props.valid;

    var icon = '', message = this.props.message ? <label className='input-error'></label> : '';
    if (this.state.validationStarted) {
      if(valid){
        inputClass += '-valid';
      }
      else{
        inputClass += '-invalid';
        message = this.props.message ? <label className='input-error'>{this.props.message}</label> : '';
        icon = <Icon type="cross-error"/>;
      }
    }

    inputClass = this.state.isFocused ? inputClass + ' focus' : inputClass;

    return (<div className={containerClass}>
    {label}{req}
    <div className={inputClass}>
    <input
      className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler} />{icon}
        </div>{message}
    </div>);
  }
});

module.exports = MozeInput;
