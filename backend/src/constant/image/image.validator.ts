import Joi from "joi";

export const schema = Joi.object({
  fieldname: Joi.string().valid("file").required(), // Validate the field name
  originalname: Joi.string().required(), // File name
  mimetype: Joi.string()
    .valid("image/jpeg", "image/png", "image/jpg", "image/webp")
    .required(), // Allowed file types
  size: Joi.number()
    .max(5 * 1024 * 1024)
    .required(), // Max file size: 5MB
  encoding: Joi.string().required(),
});
