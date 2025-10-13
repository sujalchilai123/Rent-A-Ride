import Joi from 'joi';

export const carSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  brand: Joi.string().min(2).max(100).required(),
  category: Joi.string().valid('luxury', 'suv', 'economy').required(),
  dailyRate: Joi.number().min(0).required(),
  imageUrl: Joi.string().uri().required(),
  available: Joi.boolean().optional(),
  description: Joi.string().allow('').max(1000).optional(),
});
