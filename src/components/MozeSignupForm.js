'use strict';

var React = require('react/addons');
var validators = require('components/utils/validators');
var MozeInput = require('components/MozeInput');
var FacebookButton = require('components/FacebookButton');
var PhotoUpload = require('components/PhotoUpload');
var ToggleSwitch = require('components/ToggleSwitch');
var GenderSelect = require('components/GenderSelect');
var Signup = require('components/Signup');

require('normalize.css');
require('../styles/form-Main.sass');

var MozeSignupForm = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      picture: null,
      email: '',
      password: '',
      repeat: '',
      gender: 'Male',
      privacypolicy: true
    };
  },
  onFileUpload: function(file) {
    this.setState({
      picture: file
    });
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
  onGenderChange: function(value){
    this.setState({
      gender: value
    });
  },
  onPrivacyChange: function(){
    this.setState({
      privacypolicy: !this.state.privacypolicy
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
  validateForm: function(){
    var v = this.validate();
    var result = !(v.name.invalid(this.state.name) ||
                v.email.invalid(this.state.email) ||
                v.password.invalid(this.state.password, this.state.repeat) ||
                !this.state.privacypolicy);
    return result;
  },
  onFormSubmit: function(e){
    if(!this.validateForm()) {
      e.preventDefault();
    }
    /*
     *  Here state contains valid data to submit
     */
  },
  render: function(){
    var v = this.validate();
    var isValid = this.validateForm();

    return (
      <form className="moze-signup-form" onSubmit={this.onFormSubmit}>
        <FacebookButton></FacebookButton>
        <div className="separator">
          <span> OR </span>
        </div>
        <PhotoUpload
          className="photo-upload"
          onChange={this.onFileUpload}/>
        <MozeInput valid={!v.name.invalid(this.state.name)}
                label='Your Name'
                value={this.state.name}
                message={v.name.message}
                onChange={this.onNameChange}
                placeholder='Type your name'
                required />
        <MozeInput valid={!v.email.invalid(this.state.email)}
              label={v.email.label}
              value={this.state.email}
              message={v.email.message}
              onChange={this.onEmailChange}
              placeholder='Type your email'
              required/>
        <MozeInput valid='true'
              containerClass="input-container c-height"
              label={v.password.label}
              value={this.state.password}
              onChange={this.onPasswordChange}
              onFocus={this.onFocusHandler}
              placeholder='Choose a password'
              required/>
        <MozeInput valid={!v.password.invalid(this.state.password, this.state.repeat)}
              containerClass="input-container c-height"
              value={this.state.repeat}
              message={v.password.message}
              onChange={this.onRepeatChange}
              placeholder='Repeat password'/>
        <GenderSelect
              label="Select you Gender"
              value={this.state.gender}
              onChange={this.onGenderChange}/>
        <ToggleSwitch onChange={this.onPrivacyChange}/>
        <Signup enabled={isValid}/>
      </form>
    );
  }
});

React.render(<MozeSignupForm />, document.getElementById('content'));

module.exports = MozeSignupForm;
