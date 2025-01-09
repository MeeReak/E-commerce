import Joi from "joi";

export const commentSchema = Joi.object({
  productId: Joi.string().required(), // ID of the product being commented on
  comment: Joi.string().required().min(3).max(1000), // The text of the comment
  name: Joi.string().required().min(2).max(50), // Name of the person who commented
  star: Joi.number().min(1).max(5).required(), // Star rating between 1 and 5
});

export const updateCommentSchema = Joi.object({
  comment: Joi.string().min(3).max(1000), // The text of the comment
  star: Joi.number().min(1).max(5), // Star rating between 1 and 5
});
