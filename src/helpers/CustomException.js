class CustomException extends Error {
  constructor({ code, message, type }, extra) {
    super(message);
    this.code = code || 500;
    this.message = message;
    this.type = type;
    this.extra = extra;
  }
}
module.exports = CustomException;
