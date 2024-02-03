import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
  path: NODE_ENV == 'development' ? '.env.development' : `.env.${NODE_ENV}`,
});

const env = process.env;

export { env };
