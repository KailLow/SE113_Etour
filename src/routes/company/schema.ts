import Joi from 'joi';

export default {
  credential: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required().min(6),
  }),
  createAdmin: Joi.object().keys({
    fullName: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
  signup: Joi.object().keys({
    name: Joi.string().required().min(1),
    email: Joi.string().required().email(),
    description: Joi.string().optional().min(1),
    address: Joi.string().optional(),
    phone: Joi.string().optional(),
    username: Joi.string().required().min(1),
    password: Joi.string().required().min(6),
  }),
  addStaff: Joi.object().keys({
    fullName: Joi.string().required().min(1),
    role: Joi.string().required(),
    permissions: Joi.array().items(Joi.string()),
    username: Joi.string().required().min(1),
    password: Joi.string().required().min(6),
  }),
};
