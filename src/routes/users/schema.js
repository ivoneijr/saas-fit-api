const Joi = require('joi');
const RouteValidator = require('../../middlewares/SchemaValidator');

class Schema extends RouteValidator {
  static get all() {
    const schema = {
      query: Joi.object().keys({
        offset: Joi.number().integer().min(0).default(0),
        limit: Joi.number().integer().min(1).default(20),
        query: Joi.string(),
      }),
    };

    return this.validate(schema);
  }

  static get show() {
    const schema = {
      params: Joi.object().keys({
        id: Joi.number().required(),
      }),
    };

    return this.validate(schema);
  }
}

module.exports = Schema;
