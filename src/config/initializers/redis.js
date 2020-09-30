const redis = require('redis');
const { error, info } = require('../../helpers/logger');

const {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_DB,
  REDIS_PREFIX,
  NODE_ENV,
} = process.env;

const redisClient = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  db: REDIS_DB,
});

// const clearCache = () => {
//   if (NODE_ENV === 'develop') {
//     redisClient.keys(`${REDIS_PREFIX}*`, (err, rows) => {
//       rows.forEach((key) => redisClient.del(key));
//     });
//     info('[redis] cache cleaned');
//   }
// };

redisClient.on('error', (err) => {
  error(err);
});

redisClient.on('connect', () => {
  info(`[redis] connected on host ${REDIS_HOST}:${REDIS_PORT}`);

  // clearCache();
});

module.exports = {
  redisClient,
};
