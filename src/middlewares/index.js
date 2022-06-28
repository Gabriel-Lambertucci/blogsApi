const Joi = require('joi');

const loginDTO = Joi.object({
  email: Joi.string().min(5).required(),
  password: Joi.number().integer().min(1).required(),
}).messages({
  'any.required': '{{#label}} is required',
});

const loginMiddleware = (req, res, next) => {
  const { error } = loginDTO.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};

module.exports = { loginMiddleware };