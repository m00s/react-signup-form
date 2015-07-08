import _ from 'lodash';

const _isSupplied = function(val) {
  let value = val;
  if (val && val.size && val.toJS) {
    value = val.toJS();
  }
  if (_.isArray(value) && _.isEmpty(value)) {
    return false;
  }
  if (_.isObject(value) && _.isEmpty(value)) {
    return false;
  }
  if (_.isNull(value) || _.isUndefined(value)) {
    return false;
  }
  if (_.isNumber(value)) {
    return true;
  }
  return !_.isEmpty(value);
};

const EMAIL_PATTERN = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

const required = {
  name: 'required',
  invalid: function(value) {
    return !_isSupplied(value);
  },
  message: 'This field is required.'
};
const email = {
  label: 'Email Address',
  invalid: function(value) {
    return (_isSupplied(value) && !EMAIL_PATTERN.test(value)) || (!_isSupplied(value));
  },
  message: 'Insert a valid Email address'
};
const password = {
  label: 'Password',
  invalid: function(p1, p2) {
    if(!_isSupplied(p1)) {
      this.message = 'Password must be non-empty';
      return true;
    }
    if(!_isSupplied(p2)) {
      this.message = 'Repeat password';
      return true;
    }
    if(!(p1 === p2)) {
      this.message = 'Passwords must match';
      return true;
    }
    return false;
  },
  message: 'Password must match'
};

export default {
  required,
  email,
  password,
  _isSupplied
};
