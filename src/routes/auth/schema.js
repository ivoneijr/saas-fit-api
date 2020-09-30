const Joi = require('joi');
const RouteValidator = require('../../middlewares/SchemaValidator');

class Schema extends RouteValidator {
  static get login() {
    const schema = {
      body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get refresh() {
    const schema = {
      body: Joi.object().keys({
        refresh_token: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }
}

module.exports = Schema;
