import Joi from "joi";

export const categorySchema = Joi.object({
  name: Joi.string().min(2).max(50).required(), // Name of the person who commented
  // productId: Joi.array().items(Joi.string().required()).optional(),
});

export const updateCategorySchema = Joi.object({
  name: Joi.string().min(2).max(50), // Name of the person who commented
  productId: Joi.array().items(Joi.string().required()),
});
