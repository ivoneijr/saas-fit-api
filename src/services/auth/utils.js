const moment = require('moment');

const assertExpiration = (input) => {
  const unity = input.replace(/[0-9]/g, '');
  const value = input.replace(/\D/g, '');
  let config;

  switch (unity) {
    case 's':
      config = { value, unity: 'seconds' };
      break;
    case 'm':
      config = { value, unity: 'minutes' };
      break;
    case 'h':
      config = { value, unity: 'hours' };
      break;
    case 'd':
      config = { value, unity: 'days' };
      break;

    default:
      // TODO: throw exception or add default value
      break;
  }

  return config;
};

const getExpiresAt = (input) => {
  const expiration = assertExpiration(input);

  return new Date(moment().add(expiration.value, expiration.unity)).getTime();
};

module.exports = { assertExpiration, getExpiresAt };
