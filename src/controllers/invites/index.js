const { invites } = require('../../services');
const { error } = require('../../helpers/logger');

const insert = async (req, res, next) => {
  try {
    const { body } = req;
    const created = await invites.insert(body);

    return res.status(201).send(created);
  } catch (err) {
    return error(err, next);
  }
};

const pending = async (req, res, next) => {
  try {
    const pendingInvites = await invites.pending();

    return res.status(200).send(pendingInvites);
  } catch (err) {
    return error(err, next);
  }
};

module.exports = {
  insert,
  pending,
};
