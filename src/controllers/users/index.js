const { users } = require('../../services');
const { error } = require('../../helpers/logger');
const { paginated } = require('../../helpers/pagination');

const all = async (req, res, next) => {
  try {
    const { params, query } = req;
    const result = await users.all({ ...params, ...query });

    return res.send(paginated(result, req));
  } catch (err) {
    return error(err, next);
  }
};

const show = async (req, res, next) => {
  try {
    const { params, query } = req;

    const user = await users.show({ ...params, query });
    return res.send(user);
  } catch (err) {
    return error(err, next);
  }
};

const me = async (req, res, next) => {
  try {
    const { user } = req;

    const data = await users.me(user);
    return res.send({ data });
  } catch (err) {
    return error(err, next);
  }
};

module.exports = {
  all,
  show,
  me,
};
