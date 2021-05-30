import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

// const config = {
//   PORT: process.env['PORT'],
//   NODE_ENV: process.env['NODE_ENV'],
//   MONGO_CONNECTION_STRING: process.env['MONGO_CONNECTION_STRING'],
//   JWT_SECRET_KEY: process.env['JWT_SECRET_KEY'],
//   AUTH_MODE: process.env['AUTH_MODE'] === 'true',
// };

const { PORT } = process.env;
const { NODE_ENV } = process.env;
const { MONGO_CONNECTION_STRING } = process.env;
const { JWT_SECRET_KEY } = process.env;
const { AUTH_MODE } = process.env;

export { PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE };
