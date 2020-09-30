/* eslint-disable no-underscore-dangle */
const Joi = require('joi');

class SchemaValidator {
  static validate(schema) {
    return this._validate.bind(schema);
  }

  static _validate(req, res, next) {
    const data = {};
    const schema = this;

    Object.keys(schema).map((k) => {
      data[k] = req[k];

      return k;
    });

    const validation = Joi.validate(data, schema);

    if (!validation.error) {
      next();
    } else {
      res.status(400).send({
        errors: validation.error.details,
      });
    }
  }
}

module.exports = SchemaValidator;
