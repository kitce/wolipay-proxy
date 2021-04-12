import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT!) || 612;

const config = {
  port
};

export default config;
