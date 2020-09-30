const CustomException = require('../helpers/CustomException');

const errorHandler = (error, _req, res, next) => {
  if (error instanceof CustomException) {
    const body = { message: error.message, type: error.type };

    res.status(error.code).send(body);

    return next();
  }

  res.status(500).send({ message: 'Internal Server Error' });

  return next();
};

module.exports = {
  errorHandler,
};
