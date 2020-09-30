const winston = require('winston');
const CustomException = require('./CustomException');

const levels = {
  INFO: 'info',
  ERROR: 'error',
  WARNING: 'warning',
};

const log = ({ level, message }) => {
  if (process.env.NODE_ENV !== 'test') {
    winston.log({
      level,
      message,
    });
  }
};

const error = (err, next = null) => {
  if (err instanceof CustomException) {
    log({ level: levels.ERROR, message: err.message });

    next(err);
  } else {
    log({ level: levels.ERROR, message: err });
  }
};

const warning = (message) => {
  log({ level: levels.WARNING, message });
};

const info = (message) => {
  log({ level: levels.INFO, message });
};

module.exports = {
  info,
  error,
  warning,
};
