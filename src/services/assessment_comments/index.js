const model = require('../../model/assessment_comments');

const insert = async (body) => {
  const result = await model.insert(body);

  return result;
};

const remove = async (params) => {
  return model.remove(params);
};

module.exports = {
  insert,
  remove,
};
