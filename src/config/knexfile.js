const { config: dotenv } = require('dotenv');
const path = require('path');

// dotenv({ path: path.resolve(__dirname, '../../.env') });
dotenv({
  path:
    process.env.NODE_ENV === 'test'
      ? path.resolve(__dirname, '../../.env.test')
      : path.resolve(__dirname, '../../.env'),
});

const {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DEBUG,
} = process.env;

const MIGRATION_TABLE = 'knex_migrations';

const config = {
  client: 'pg',
  debug: DEBUG === 'true',
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: MIGRATION_TABLE,
    directory: '../../db/migrations',
  },
  seeds: {
    directory: '../../db/seeds',
  },
};

module.exports = config;
