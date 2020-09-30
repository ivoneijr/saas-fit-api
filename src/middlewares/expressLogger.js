const { info } = require('../helpers/logger');

const blacklist = [
  '/favicon.ico',
  '/static/css/style.css',

  '/static/client.html',
  '/static/js/client.js',

  '/static/seller.html',
  '/static/js/seller.js',
];

const expressLogger = (req, res, next) => {
  if (!blacklist.includes(req.url)) {
    const message = {
      method: req.method,
      url: req.url,
      status_code: res.statusCode,
    };

    info(JSON.stringify(message));
  }

  return next();
};

module.exports = {
  expressLogger,
};
