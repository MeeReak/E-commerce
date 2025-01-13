import Joi from "joi";

export const schema = Joi.object({
  userId: Joi.string().required(),
  productId: Joi.array().items(Joi.string()),
});

export const updateSchema = Joi.object({
  productId: Joi.array().items(Joi.string()),
});
