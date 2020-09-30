const Joi = require('joi');
const RouteValidator = require('../../middlewares/SchemaValidator');

class Schema extends RouteValidator {
  static get insert() {
    const schema = {
      body: Joi.object().keys({
        assessment_id: Joi.number().integer().required(),
        user_id: Joi.number().integer().required(),
        comment: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get delete() {
    const schema = {
      params: Joi.object().keys({
        id: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }
}

module.exports = Schema;
