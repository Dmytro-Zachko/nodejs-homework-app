const Joi = require('joi')

const addSchema = Joi.object().keys({
  name: Joi.string().required().messages({
    "any.required": "Field 'name' is missing",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Field 'email' is missing",
  }),
  phone: Joi.string().required().messages({
    "any.required": "Field 'phone' is missing",
  }),
  favorite: Joi.boolean().messages({
    "any.required": "Field 'favourite' is missing",
  }),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required()
})

module.exports = {
  addSchema,
  updateFavoriteSchema
};