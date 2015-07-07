'use strict';

var React = require('react/addons');


require('styles/GenderSelect.sass');

var GenderSelect = React.createClass({
  getInitialState: function() {
    return {
      gender: this.props.value
    };
  },
  onMaleClick: function() {
    this.props.onChange('Male');
    this.state.gender = 'Male';
  },
  onFemaleClick: function() {
    this.props.onChange('Female');
    this.state.gender = 'Female';
  },
  render: function () {
    //var value = this.props.value || 'M';
    var cx = React.addons.classSet;
    var maleClasses = cx({
        'gender': true,
        'selected': this.state.gender === 'Male'
    });
    var femaleClasses = cx({
        'gender': true,
        'selected': this.state.gender === 'Female'
    });

    return (
      <div className="input-container">
        <label className="input-label">{this.props.label}</label>
        <div className={this.props.className}>
            <div className={maleClasses}>
              <button onClick={this.onMaleClick}>Male</button>
            </div>
            <div className={femaleClasses}>
              <button onClick={this.onFemaleClick}>Female</button>
            </div>
        </div>
      </div>
      );
  }
});

module.exports = GenderSelect;
