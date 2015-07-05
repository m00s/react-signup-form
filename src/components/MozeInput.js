'use strict';

var React = require('react/addons');
var Icon = require('components/Icon');
var _ = require('lodash');

require('../styles/components.sass');

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
      //this.prepareToValidate = _.debounce(startValidation, 1000);
      this.prepareToValidate = _.debounce(startValidation, 0);
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
    var inputClass = this.props.className;
    var placeholder = this.props.placeholder;
    var value = this.props.value;
    var label = this.props.label;
    var valid = this.props.valid;
    var icon = '', message = '';

    if (this.state.validationStarted) {
      if(valid){
        message = icon = '';
      }
      else{
        inputClass += '-invalid';
        message = this.props.message;
        icon = <Icon type="circle_error"/>;
      }
    }

    inputClass = this.state.isFocused ? inputClass + ' focus' : inputClass;

    return (<div className="input-container">
    <label className="input-label">{label}</label>
    <div className={inputClass}>
    <input
      className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler} />{icon}
        </div><label className='input-error'>{message}</label>
    </div>);
  }
});

module.exports = MozeInput;
