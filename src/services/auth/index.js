const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const model = require('../../model/user');
const { getExpiresAt } = require('./utils');
const cache = require('../cache');

const login = async (params) => {
  const { email, password } = params;
  const user = await model.getBy({ email });

  if (!user) {
    // TODO:
    console.log('throww');
    // throw
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    // TODO:
    console.log('throww pass incorrect');
    // throw
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      expiresAt: getExpiresAt(process.env.JWT_EXPIRES_IN),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET
  );

  const cachedTokens = JSON.parse(await cache.get('jwt_refresh_tokens')) || [];
  cachedTokens.push(refreshToken);
  await cache.set('jwt_refresh_tokens', cachedTokens, 40);

  return { access_token: token, refresh_token: refreshToken };
};

const refresh = async (body) => {
  const { refresh_token: refreshToken } = body;
  const cachedTokens = JSON.parse(await cache.get('jwt_refresh_tokens')) || [];

  if (!cachedTokens.includes(refreshToken)) {
    // TODO: throw 403
    return false;
  }

  const verified = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  if (!verified) {
    // TODO: throw 403
    return false;
  }

  const token = jwt.sign(
    {
      id: verified.id,
      role: verified.role,
      expiresAt: getExpiresAt(process.env.JWT_EXPIRES_IN),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  const newRefreshToken = jwt.sign(
    { id: verified.id },
    process.env.JWT_REFRESH_SECRET
  );

  cachedTokens.push(newRefreshToken);
  await cache.set('jwt_refresh_tokens', cachedTokens, 40);

  return { access_token: token, refresh_token: newRefreshToken };
};

module.exports = {
  login,
  refresh,
};
