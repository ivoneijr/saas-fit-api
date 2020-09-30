const Joi = require('joi');
const RouteValidator = require('../../middlewares/SchemaValidator');

class Schema extends RouteValidator {
  static get insert() {
    const schema = {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }
}

module.exports = Schema;
