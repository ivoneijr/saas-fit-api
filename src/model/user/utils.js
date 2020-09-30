const { User, Coach, Pupil } = require('../definitions');

const getModelByRole = (user) => {
  if (user.role === 'PUPIL') {
    return new Pupil();
  }

  if (user.role === 'COACH') {
    return new Coach();
  }

  return new User();
};

module.exports = { getModelByRole };
