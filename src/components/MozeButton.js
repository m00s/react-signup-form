'use strict';

var React = require('react/addons');

require('styles/components.sass');

var MozeButton = React.createClass({
  mixins: [],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    return (
        <button className="moze-button">This is a button</button>
      );
  }
});

module.exports = MozeButton;
