const { knex } = require('../../config/db');
const {
  ASSESSMENT_COMMENT_ADD_ERROR,
  ASSESSMENT_COMMENT_DELETE_ERROR,
} = require('../../helpers/erros');
const CustomException = require('../../helpers/CustomException');

const insert = async (data) => {
  try {
    return knex('assessment_comments').insert(data).returning('*');
  } catch (error) {
    throw new CustomException(ASSESSMENT_COMMENT_ADD_ERROR);
  }
};

const remove = async (where) => {
  try {
    return knex('assessment_comments').where(where).del();
  } catch (error) {
    throw new CustomException(ASSESSMENT_COMMENT_DELETE_ERROR);
  }
};

module.exports = {
  insert,
  remove,
};
