const UserModel = require('../../src/model/user');

const CREATE_USER = (data) => {
  UserModel.insert(data);
};

module.exports = {
  CREATE_USER,
};
