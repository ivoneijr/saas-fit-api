const { auth } = require('../../services');
const { error } = require('../../helpers/logger');

const login = async (req, res, next) => {
  try {
    const { body } = req;
    const tokens = await auth.login(body);

    return res.send(tokens);
  } catch (err) {
    return error(err, next);
  }
};

const refresh = async (req, res, next) => {
  try {
    const { body } = req;
    const tokens = await auth.refresh(body);

    return res.send(tokens);
  } catch (err) {
    return error(err, next);
  }
};

module.exports = {
  login,
  refresh,
};
