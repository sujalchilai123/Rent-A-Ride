import mongoose from 'mongoose';

export async function connectToDatabase(mongoUri) {
  if (!mongoUri) {
    throw new Error('MONGO_URI is required');
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(mongoUri, {
    autoIndex: true,
  });

  const connection = mongoose.connection;
  connection.on('connected', () => console.log('MongoDB connected'));
  connection.on('error', (err) => console.error('MongoDB connection error:', err));
  connection.on('disconnected', () => console.warn('MongoDB disconnected'));

  return connection;
}
