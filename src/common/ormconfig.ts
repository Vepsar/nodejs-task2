import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

const directory = path.join(__dirname, '../../.env');

dotenv.config({
  path: directory,
});

const ormconfig = {
  type: 'postgres',
  synchronize: false,
  host: process.env['POSTGRES_HOST'],
  port: process.env['PSQL_PORT'],
  username: process.env['PSQL_USER'],
  password: process.env['PSQL_PASSWORD'],
  database: process.env['PSQL_DB'],
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
  migrationsRun: true,
  migrationsTableName: 'custom_migration_table',
  entities: ['src/resources/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
} as ConnectionOptions;

export default ormconfig;
