import dotenv from 'dotenv';

dotenv.config();

export const port = parseInt(process.env.PORT!) || 612;
