const model = require('../../model/user');

const all = async (params) => {
  const result = await model.all(params);

  return result;
};

const show = async (params) => {
  const user = await model.getBy(params);

  return user;
};

const me = async (user) => {
  const data = await model.me(user);

  return data;
};

module.exports = {
  all,
  show,
  me,
};
