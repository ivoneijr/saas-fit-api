const { promisify } = require('util');
const { redisClient } = require('../../config/initializers/redis');

const shouldParse = (value) => {
  return !['string', 'number', 'boolean'].includes(typeof value);
};

const get = async (key) => {
  return promisify(redisClient.get).bind(redisClient)(
    `${process.env.REDIS_PREFIX}${key}`
  );
};

const set = async (
  key,
  value,
  expiresInSeconds = process.env.REDIS_DEFAULT_EXPIRES_IN_SECONDS
) => {
  let data = value;

  if (shouldParse(value)) {
    data = JSON.stringify(value);
  }

  return redisClient.setex(
    `${process.env.REDIS_PREFIX}${key}`,
    expiresInSeconds,
    data
  );
};

const del = (key) => redisClient.unlink(key);

module.exports = {
  get,
  set,
  del,
};
