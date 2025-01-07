import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

// Extend Joi to include the ObjectId validation
Joi.objectId = JoiObjectId(Joi);

export const idParamSchema = Joi.object({
  id: Joi.objectId().required().label('Param'),
}).options({ allowUnknown: true });