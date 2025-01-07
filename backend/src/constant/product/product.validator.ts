import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  description: Joi.string().required().min(10).max(500),
  price: Joi.number().required().min(5),
  stockQuantity: Joi.number().required(),
  star: Joi.number().min(0).max(5).required(), // Assuming star rating is between 0 and 5
  images: Joi.array().items(Joi.string()).required(), // Assuming each image is represented by a string (URL or filename)
  sku: Joi.string().required(),
  brand: Joi.string().required(),
  goodPoint: Joi.array().items(Joi.string()).required(),
  discount: Joi.number().min(0).max(100).required(), // Assuming discount is a percentage
  note: Joi.string().required(),
  tag: Joi.array().items(Joi.string()).required(),
  additionalInfo: Joi.array().items(Joi.string()).required(), // Assuming additional info is an array of objects
  categoryId: Joi.string().required(),
});
