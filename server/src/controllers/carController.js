import { Car } from '../models/Car.js';

export async function listCars(req, res, next) {
  try {
    const { category, brand } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (brand) filter.brand = brand;
    const cars = await Car.find(filter).sort({ createdAt: -1 });
    res.json(cars);
  } catch (err) {
    next(err);
  }
}

export async function getCar(req, res, next) {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) {
    next(err);
  }
}

export async function createCar(req, res, next) {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (err) {
    next(err);
  }
}

export async function updateCar(req, res, next) {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) {
    next(err);
  }
}

export async function deleteCar(req, res, next) {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json({ message: 'Car deleted' });
  } catch (err) {
    next(err);
  }
}
