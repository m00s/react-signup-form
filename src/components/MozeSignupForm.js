'use strict';

var React = require('react/addons');
var MozeInput = require('components/MozeInput');
var FacebookButton = require('components/FacebookButton');
var PhotoUpload = require('components/PhotoUpload');
var validators = require('components/validators');
var ToggleSwitch = require('components/ToggleSwitch');

require('normalize.css');
require('../styles/main.sass');

var MozeSignupForm = React.createClass({
  getInitialState: function(){
    return {name: '', email: '', password: '', repeat: ''};
  },
  onNameChange: function(e){
    this.setState({
      name: e.target.value
    });
  },
  onEmailChange: function(e){
    this.setState({
      email: e.target.value
    });
  },
  onPasswordChange: function(e){
    this.setState({
      password: e.target.value
    });
  },
  onRepeatChange: function(e){
    this.setState({
      repeat: e.target.value
    });
  },
  onFocus: function(e){
    e.target.className += ' focus';
  },
  validate: function(){
    return {
      name: validators.required,
      email: validators.email,
      password: validators.password
    };
  },
  onFormSubmit: function(e){
    e.preventDefault();
  },
  render: function(){
    var v = this.validate();
    return (
      <form className="moze-signup-form" onSubmit={this.onFormSubmit}>
        <FacebookButton></FacebookButton>
        <PhotoUpload className="photo-upload"></PhotoUpload>
        <MozeInput valid={!v.name.invalid(this.state.name)}
               className='moze-input'
               label='Your Name'
               value={this.state.name}
               message={v.name.message}
               onChange={this.onNameChange}
               placeholder='Type your name'/>
       <MozeInput valid={!v.email.invalid(this.state.email)}
              className='moze-input'
              label='Email address'
              value={this.state.email}
              message={v.email.message}
              onChange={this.onEmailChange}
              placeholder='Type your email'/>
      <MozeInput valid='true'
            className='moze-input'
            label='Password'
            value={this.state.password}
            message={v.password.message}
            onChange={this.onPasswordChange}
            onFocus={this.onFocusHandler}
            placeholder='Choose a password'/>
      <MozeInput valid={!v.password.invalid(this.state.password, this.state.repeat)}
            className='moze-input'
            label=''
            value={this.state.repeat}
            message={v.password.message}
            onChange={this.onRepeatChange}
            placeholder='Repeat password'/>
      <ToggleSwitch></ToggleSwitch>
      </form>
    );
  }
});

React.render(<MozeSignupForm />, document.getElementById('content'));

module.exports = MozeSignupForm;
