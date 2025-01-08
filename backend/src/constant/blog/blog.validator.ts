import Joi from "joi";

export const blogSchema = Joi.object({
  title: Joi.string().required(), // Title of the blog
  description1: Joi.string().required(), // Description of the blog
  description2: Joi.string().required(), // Description of the blog
  description3: Joi.string().required(), // Description of the blog
  images: Joi.array().items(Joi.string()).required(), // Array of image URLs
  tags: Joi.array().items(Joi.string()).required(), // Array of tags
  userId: Joi.string().required(), // ID of the user who created the blog
  commentId: Joi.array().items(Joi.string()), // Array of comment IDs
});

export const updateBlogSchema = Joi.object({
  title: Joi.string(), // Title of the blog
  description1: Joi.string(), // Description of the blog
  description2: Joi.string(), // Description of the blog
  description3: Joi.string(), // Description of the blog
  images: Joi.array().items(Joi.string()), // Array of image URLs
  tags: Joi.array().items(Joi.string()), // Array of tags
  userId: Joi.string(), // ID of the user who created the blog
  commentId: Joi.array().items(Joi.string()), // Array of comment IDs
});
