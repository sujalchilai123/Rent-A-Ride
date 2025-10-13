import { Router } from 'express';
import { listCars, getCar, createCar, updateCar, deleteCar } from '../controllers/carController.js';
import { carSchema } from '../validations/carValidation.js';

const router = Router();

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, allowUnknown: false });
    if (error) {
      return res.status(400).json({ message: 'Validation error', details: error.details.map(d => d.message) });
    }
    req.body = value;
    next();
  };
}

router.get('/', listCars);
router.get('/:id', getCar);
router.post('/', validate(carSchema), createCar);
router.put('/:id', validate(carSchema), updateCar);
router.delete('/:id', deleteCar);

export default router;
