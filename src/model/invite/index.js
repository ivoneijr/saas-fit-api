const { uuid } = require('uuidv4');
const { knex } = require('../../config/db');
const { INVITE_ADD_ERROR } = require('../../helpers/erros');
const CustomException = require('../../helpers/CustomException');

const insert = async (data) => {
  try {
    return knex('invites')
      .insert({ ...data, hash: uuid() })
      .returning('*');
  } catch (error) {
    throw new CustomException(INVITE_ADD_ERROR);
  }
};

const pending = async () => {
  try {
    return knex('invites').select().where({ pending: true });
  } catch (error) {
    throw new CustomException(INVITE_ADD_ERROR);
  }
};

module.exports = {
  insert,
  pending,
};
