function ValidationError(errors) {
  this.messages = errors;
  this.error = 'ValidationError';
  this.status = 400;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

exports.ValidationError = ValidationError;
