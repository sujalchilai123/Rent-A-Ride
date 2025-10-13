import dotenv from 'dotenv';
import { connectToDatabase } from '../config/db.js';
import { Car } from '../models/Car.js';

dotenv.config();

const seedCars = [
  { name: 'Mercedes-Benz S-Class', brand: 'Mercedes-Benz', category: 'luxury', dailyRate: 3000, imageUrl: '/images/mercedeze.jpg', description: 'Flagship luxury sedan' },
  { name: 'BMW 7 Series', brand: 'BMW', category: 'luxury', dailyRate: 2800, imageUrl: '/images/bmw.jpg', description: 'Executive luxury sedan' },
  { name: 'Audi A8', brand: 'Audi', category: 'luxury', dailyRate: 2700, imageUrl: '/images/audi.jpg', description: 'Premium luxury sedan' },
  { name: 'Range Rover', brand: 'Land Rover', category: 'suv', dailyRate: 2200, imageUrl: '/images/Range.jpg', description: 'Iconic luxury SUV' },
  { name: 'Ford Endeavour', brand: 'Ford', category: 'suv', dailyRate: 2000, imageUrl: '/images/ford.jpg', description: 'Capable and spacious SUV' },
  { name: 'Toyota Fortuner', brand: 'Toyota', category: 'suv', dailyRate: 1900, imageUrl: '/images/fortuner.jpg', description: 'Rugged and reliable SUV' },
  { name: 'Maruti Swift', brand: 'Maruti', category: 'economy', dailyRate: 1000, imageUrl: '/images/Swift.jpeg', description: 'Popular compact hatchback' },
  { name: 'Hyundai i20', brand: 'Hyundai', category: 'economy', dailyRate: 900, imageUrl: '/images/i20.jpg', description: 'Comfortable premium hatchback' },
  { name: 'Tata Tiago', brand: 'Tata', category: 'economy', dailyRate: 800, imageUrl: '/images/tiago.jpg', description: 'Affordable and efficient hatchback' },
];

async function seed() {
  try {
    await connectToDatabase(process.env.MONGO_URI);
    await Car.deleteMany({});
    await Car.insertMany(seedCars);
    console.log(`Seeded ${seedCars.length} cars`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
