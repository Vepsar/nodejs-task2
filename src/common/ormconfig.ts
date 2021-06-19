import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

const directory = path.join(__dirname, '../../.env');

dotenv.config({
  path: directory,
});

export const ormconfig = {
  type: 'postgres',
  name: process.env['POSTGRES_NAME'],
  synchronize: true, // test obj
  host: process.env['POSTGRES_HOST'],
  port: process.env['POSTGRES_PORT'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRESS_DB'],
  autoReconnect: true,
  reconnectTries: 100,
  reconnectionInterval: 1000,
  entities: ['../resources/entities/**/*.ts'],
} as ConnectionOptions;
