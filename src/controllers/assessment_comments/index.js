const { assessmentComments } = require('../../services');
const { error } = require('../../helpers/logger');

const insert = async (req, res, next) => {
  try {
    const { body } = req;
    const created = await assessmentComments.insert(body);

    return res.status(201).send(created);
  } catch (err) {
    return error(err, next);
  }
};

const remove = async (req, res, next) => {
  try {
    const { params } = req;
    await assessmentComments.remove(params);

    return res.status(200).send();
  } catch (err) {
    return error(err, next);
  }
};

module.exports = {
  insert,
  remove,
};
