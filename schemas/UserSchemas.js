const Joi = require('joi')

const registerSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    "any.required": "Missing field 'email'",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Missing field 'password'",
  })
});

const emailSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    "any.required": "Missing field 'email'",
  }),
  });

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .required()
    .messages({
      "any.required": "Missing field 'subscription'",
    }),
});


module.exports = {
    registerSchema,
  subscriptionSchema,
    emailSchema
}