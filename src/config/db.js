/* eslint-disable import/order */
const config = require('./knexfile');
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

module.exports = {
  knex,
  bookshelf,
};
