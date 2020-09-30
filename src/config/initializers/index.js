const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const http = require('http');

const logger = require('./logger');
const { errorHandler } = require('../../middlewares/errorHandler');
const { expressLogger } = require('../../middlewares/expressLogger');
const routes = require('../../routes');

const init = async (app) => {
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(expressLogger);
  app.use(routes);
  app.use(errorHandler);

  await logger.init();

  const server = http.createServer(app);

  return server;
};

module.exports = { init };
