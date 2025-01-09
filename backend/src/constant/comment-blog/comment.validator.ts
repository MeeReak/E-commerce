import Joi from "joi";

export const commentSchema = Joi.object({
  blogId: Joi.string().required(), // ID of the product being commented on
  message: Joi.string().required().min(3).max(1000), // The text of the comment
  name: Joi.string().required().min(2).max(50), // Name of the person who commented
  email: Joi.string().email().required(), // Email of the person who commented
});

export const updateCommentSchema = Joi.object({
  message: Joi.string().min(3).max(1000), // The text of the comment
  name: Joi.string().min(2).max(50), // Name of the person who commented
  email: Joi.number().min(1).max(5), // Star rating between 1 and 5
});
