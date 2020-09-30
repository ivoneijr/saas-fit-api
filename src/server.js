const { config: dotenv } = require('dotenv');
const { check } = require('checkenv');
const { info } = require('./helpers/logger');

dotenv({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });
check();

const app = require('./app');

const up = async () => {
  const { PORT } = process.env;
  const server = await app;

  await server.listen(PORT, async () => {
    info(`🚀 Server started on port ${PORT}`);
  });
};

up();
