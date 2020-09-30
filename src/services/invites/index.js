const model = require('../../model/invite');

const insert = async (body) => {
  const result = await model.insert(body);

  return result;
};

const pending = async () => {
  const result = await model.pending();

  return result;
};

module.exports = {
  insert,
  pending,
};
