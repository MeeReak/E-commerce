import Joi from "joi";

export const schema = Joi.object({
  userId: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  companyName: Joi.string().required(),
  village: Joi.string().required(),
  district: Joi.string().required(),
  province: Joi.string().required(),
  commune: Joi.string().required(),
  street: Joi.string().required(),
});

export const updateSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  companyName: Joi.string(),
  village: Joi.string(),
  district: Joi.string(),
  province: Joi.string(),
  commune: Joi.string(),
  street: Joi.string(),
});
