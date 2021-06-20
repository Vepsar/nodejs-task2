import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

const directory = path.join(__dirname, '../../.env');

dotenv.config({
  path: directory,
});

export const ormconfig = {
  type: 'postgres',
  synchronize: true, // test obj
  host: process.env['POSTGRES_HOST'],
  port: process.env['POSTGRES_PORT'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRESS_DB'],
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
  entities: ['src/resources/entities/**/*.ts'],
} as ConnectionOptions;
