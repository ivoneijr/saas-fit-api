const { knex } = require('../../config/db');
const { User } = require('../definitions');
const { USER_NOT_FOUND, USER_ADD_ERROR } = require('../../helpers/erros');
const CustomException = require('../../helpers/CustomException');
const { getModelByRole } = require('./utils');

const insert = async (data) => {
  try {
    return knex('users').insert(data);
  } catch (error) {
    throw new CustomException(USER_ADD_ERROR);
  }
};

const all = async ({ limit, offset, query }) => {
  try {
    const [total] = await knex('users').count('id');
    const list = await knex('users')
      .select([
        'id',
        'name',
        'email',
        'is_active',
        'role',
        'created_at',
        'updated_at',
      ])
      .where('name', 'like', `%${query || ''}%`)
      .orWhere('email', 'like', `%${query || ''}%`)
      .limit(limit)
      .offset(offset);

    return { total, list };
  } catch (error) {
    throw new CustomException(USER_NOT_FOUND);
  }
};

const getBy = async (params) => {
  try {
    const {
      id,
      query: { withRelated },
    } = params;

    const result = await new User().where({ id }).fetch();
    const user = result.toJSON();

    if (withRelated) {
      const model = getModelByRole(user);

      const data = await model
        .where({ id: params.id })
        .fetchAll({ withRelated });

      return data;
    }

    return user;
  } catch (error) {
    throw new CustomException(USER_NOT_FOUND);
  }
};

const me = async (user) => {
  try {
    const result = await new User()
      .where({ id: user.id })
      .fetchAll({ withRelated: ['schedules'] });

    const model = result.toJSON();

    return model;
  } catch (error) {
    throw new CustomException(USER_NOT_FOUND);
  }
};

module.exports = {
  insert,
  all,
  getBy,
  me,
};
