const bcrypt = require('bcrypt');

const hash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  return hashed;
};

module.exports = {
  hash,
};
